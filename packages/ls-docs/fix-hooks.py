import os

file_path = r'd:\NpmPackages\ls-components-plus\packages\ls-docs\tools\hooks\useWSHook.md'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 替换 :::: 为 :::
content = content.replace(':::: warning', '::: warning')
content = content.replace('::::\n', ':::\n')
content = content.replace('::::', ':::')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed!")
