#!/bin/bash
# Apply the patch for the ApplicationUser template
patch -p1 < application-user-update-template.patch
patch -p1 < application-user-update-component.patch
