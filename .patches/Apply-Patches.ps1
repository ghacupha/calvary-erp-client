# Apply-Patches.ps1

# Directory where patch files are stored
$patchDir = ".patches"

# Check for the 'patch' command (ensure it's available in PATH)
if (!(Get-Command "patch" -ErrorAction SilentlyContinue)) {
    Write-Error "The 'patch' command is not available. Make sure Git Bash, Cygwin, or another tool providing 'patch' is installed."
    exit 1
}

# Apply the first patch
Get-Content "$patchDir/application-user-update-template.patch" | patch -p1

# Apply the second patch
Get-Content "$patchDir/application-user-update-component.patch" | patch -p1

Write-Host "Patches applied successfully." -ForegroundColor Green
