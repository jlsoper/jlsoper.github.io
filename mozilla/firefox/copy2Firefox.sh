#!/bin/bash

#  cd $(dirname $(find  ~/.mozilla/firefox  2>/dev/null -iname "prefs.js"))
#       dirname $(find  ~/.mozilla/firefox  2>/dev/null -iname "prefs.js")

/usr/bin/cp user.js  $(dirname $(find  ~/.mozilla/firefox  2>/dev/null -iname "prefs.js"))


