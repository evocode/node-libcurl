#!/bin/bash
# If running this from a macOS, you will need pkgconfig
#  brew install pkgconfig
# <release> <dest_folder>
set -euo pipefail

build_folder=$2/build/$1
curr_dirname=$(dirname "$0")
curr_pwd=$(pwd)

. $curr_dirname/utils/gsort.sh

mkdir -p $build_folder
mkdir -p $2/source

FORCE_REBUILD=${FORCE_REBUILD:-}
FORCE_REBUILD_LIBCURL=${FORCE_REBUILD_LIBCURL:-}

# @TODO We are explicitly checking the static lib
if [[ -f $build_folder/lib/libcurl-impersonate-chrome.a ]] && [[ -z $FORCE_REBUILD || $FORCE_REBUILD != "true" ]] && [[ -z $FORCE_REBUILD_LIBCURL || $FORCE_REBUILD_LIBCURL != "true" ]]; then
  echo "Skipping rebuild of libcurl-impersonate because lib file already exists"
  exit 0
fi

echo "Preparing release for libcurl"

CURL_VERSION=$3
version_with_dashes=$(echo $CURL_VERSION | sed 's/\./_/g')

if [ ! -d $2/source/libcurl ]; then
  echo "Using release tarball"

  cd $curr_pwd
  echo "https://github.com/curl/curl/releases/download/curl-$version_with_dashes/curl-$CURL_VERSION.tar.gz"
  $curr_dirname/download-and-unpack.sh \
    https://github.com/curl/curl/releases/download/curl-$version_with_dashes/curl-$CURL_VERSION.tar.gz \
    $2

  mv $2/curl-$CURL_VERSION $2/source/libcurl
  cd $2/source/libcurl
else
  cd $2/source/libcurl
  if [ -f ./configure ]; then
    make distclean || true;
  else
    ./buildconf
  fi
fi

echo "Preparing release for libcurl-impersonate"

if [ ! -d $2/source/$1 ]; then
  echo "Using release tarball"

  cd $curr_pwd
  echo "https://github.com/evocode/curl-impersonate/archive/refs/heads/main.zip"
  $curr_dirname/download-and-unpack-zip.sh \
    https://github.com/evocode/curl-impersonate/archive/refs/heads/main.zip \
    $2

  mv $2/curl-impersonate-main $2/source/$1
  cd $2/source/$1
else
  cd $2/source/$1
  make distclean || true;
fi

touch $2/source/$1/config.log
chmod +x $2/source/$1/configure

./configure \
    --prefix=$build_folder \
    "${@:4}"

if [ "$(uname)" == "Darwin" ]; then
  gmake chrome-build && gmake chrome-install
else
  make chrome-build && make chrome-install
fi

cd $build_folder
pwd
ls -al

# copy curl include to build folder
cp -r $2/source/libcurl/include $build_folder/include

# create symlinks without chrome for default usage
cd $build_folder/bin
ln -s curl-impersonate-chrome curl-impersonate && \
  ln -s curl-impersonate-chrome-config curl-impersonate-config
pwd
ls -al
