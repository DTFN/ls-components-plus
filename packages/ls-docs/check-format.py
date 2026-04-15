file_path = r'd:\NpmPackages\ls-components-plus\packages\ls-docs\tools\hooks\useWSHook.md'

with open(file_path, 'rb') as f:
    raw = f.read()

print(f"File size: {len(raw)} bytes")
print(f"\nLines 6-10:")
lines = raw.decode('utf-8', errors='replace').split('\n')
for i, line in enumerate(lines[5:10], 6):
    print(f"Line {i}: {repr(line)}")
    print(f"  Contains '::::': {'::::' in line}")
    print(f"  Contains ':::': {':::' in line}")
