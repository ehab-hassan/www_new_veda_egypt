2026-03-01T09:39:03.047Z [filesystem] [info] Initializing server... { metadata: undefined }
2026-03-01T09:39:03.073Z [filesystem] [info] Using MCP server command: C:\WINDOWS\System32\cmd.exe with args and path: {
  metadata: {
    args: [
      '/C',
      'C:\\Program Files\\nodejs\\npx.cmd',
      '-y',
      '@modelcontextprotocol/server-filesystem',
      'C:\\Users\\EHAB\\Desktop',
      'C:\\Users\\EHAB\\Documents\\projects',
      [length]: 6
    ],
    paths: [
      'C:\\Program Files\\nodejs',
      'C:\\Program Files\\Git\\cmd',
      'C:\\Program Files\\Git\\mingw64\\bin',
      'C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler',
      'C:\\WINDOWS\\system32',
      'C:\\WINDOWS',
      'C:\\WINDOWS\\System32\\Wbem',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
      'C:\\WINDOWS\\System32\\OpenSSH\\',
      'C:\\Program Files\\cursor\\resources\\app\\bin',
      'C:\\Program Files\\nodejs\\',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WindowsApps',
      'C:\\Users\\EHAB\\AppData\\Roaming\\npm',
      'C:\\Users\\EHAB\\AppData\\Local\\Programs\\Antigravity\\bin',
      [length]: 14
    ]
  }
} %o
2026-03-01T09:39:03.079Z [filesystem] [info] Server started and connected successfully { metadata: undefined }
2026-03-01T09:39:03.203Z [filesystem] [info] Message from client: {"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{"extensions":{"io.modelcontextprotocol/ui":{"mimeTypes":["text/html;profile=mcp-app"]}}},"clientInfo":{"name":"claude-ai","version":"0.1.0"}},"jsonrpc":"2.0","id":0} { metadata: undefined }
npm warn deprecated glob@10.5.0: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
Secure MCP Filesystem Server running on stdio
2026-03-01T09:39:14.435Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":0,"result":{"protocolVersion":"2025-11-25","capabilities":{"tools":{"listChanged":true}},"serverInfo":{"name":"secure-filesystem-server","version":"0.2.0"}}} { metadata: undefined }
2026-03-01T09:39:14.435Z [filesystem] [info] Message from client: {"method":"notifications/initialized","jsonrpc":"2.0"} { metadata: undefined }
Client does not support MCP Roots, using allowed directories set from server args: [ 'C:\\Users\\EHAB\\Desktop', 'C:\\Users\\EHAB\\Documents\\projects' ]
2026-03-01T09:39:14.436Z [filesystem] [info] Message from client: {"method":"tools/list","params":{},"jsonrpc":"2.0","id":1} { metadata: undefined }
2026-03-01T09:39:14.438Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":1,"result":{"tools":[{"name":"read_file","title":"Read File (Deprecated)","description":"Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.","inputSchema":{"$schema":"http://json-schema.org/draft-07/...[11759 chars truncated]...notations":{"readOnlyHint":true},"execution":{"taskSupport":"forbidden"},"outputSchema":{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"content":{"type":"string"}},"required":["content"],"additionalProperties":false}}]}} { metadata: undefined }
2026-03-01T09:39:49.983Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-01T09:39:49.984Z [filesystem] [info] Server transport closed unexpectedly, this is likely due to the process exiting early. If you are developing this MCP server you can add output to stderr (i.e. `console.error('...')` in JavaScript, `print('...', file=sys.stderr)` in python) and it will appear in this log. { metadata: undefined }
2026-03-01T09:39:49.984Z [filesystem] [error] Server disconnected. For troubleshooting guidance, please visit our [debugging documentation](https://modelcontextprotocol.io/docs/tools/debugging) { metadata: { context: 'connection', stack: undefined } }
npm notice
npm notice New minor version of npm available! 11.6.2 -> 11.11.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.11.0
npm notice To update run: npm install -g npm@11.11.0
npm notice
2026-03-01T09:39:50.037Z [filesystem] [info] Server transport closed { metadata: undefined }
2026-03-01T09:39:50.037Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-01T09:40:00.953Z [filesystem] [info] Initializing server... { metadata: undefined }
2026-03-01T09:40:00.981Z [filesystem] [info] Using MCP server command: C:\WINDOWS\System32\cmd.exe with args and path: {
  metadata: {
    args: [
      '/C',
      'C:\\Program Files\\nodejs\\npx.cmd',
      '-y',
      '@modelcontextprotocol/server-filesystem',
      'C:\\Users\\EHAB\\Desktop',
      'C:\\Users\\EHAB\\Documents\\projects',
      [length]: 6
    ],
    paths: [
      'C:\\Program Files\\nodejs',
      'C:\\Program Files\\Git\\cmd',
      'C:\\Program Files\\Git\\mingw64\\bin',
      'C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler',
      'C:\\WINDOWS\\system32',
      'C:\\WINDOWS',
      'C:\\WINDOWS\\System32\\Wbem',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
      'C:\\WINDOWS\\System32\\OpenSSH\\',
      'C:\\Program Files\\cursor\\resources\\app\\bin',
      'C:\\Program Files\\nodejs\\',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WindowsApps',
      'C:\\Users\\EHAB\\AppData\\Roaming\\npm',
      'C:\\Users\\EHAB\\AppData\\Local\\Programs\\Antigravity\\bin',
      [length]: 14
    ]
  }
} %o
2026-03-01T09:40:00.987Z [filesystem] [info] Server started and connected successfully { metadata: undefined }
2026-03-01T09:40:01.045Z [filesystem] [info] Message from client: {"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{"extensions":{"io.modelcontextprotocol/ui":{"mimeTypes":["text/html;profile=mcp-app"]}}},"clientInfo":{"name":"claude-ai","version":"0.1.0"}},"jsonrpc":"2.0","id":0} { metadata: undefined }
Secure MCP Filesystem Server running on stdio
2026-03-01T09:40:03.378Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":0,"result":{"protocolVersion":"2025-11-25","capabilities":{"tools":{"listChanged":true}},"serverInfo":{"name":"secure-filesystem-server","version":"0.2.0"}}} { metadata: undefined }
2026-03-01T09:40:03.379Z [filesystem] [info] Message from client: {"method":"notifications/initialized","jsonrpc":"2.0"} { metadata: undefined }
Client does not support MCP Roots, using allowed directories set from server args: [ 'C:\\Users\\EHAB\\Desktop', 'C:\\Users\\EHAB\\Documents\\projects' ]
2026-03-01T09:40:03.380Z [filesystem] [info] Message from client: {"method":"tools/list","params":{},"jsonrpc":"2.0","id":1} { metadata: undefined }
2026-03-01T09:40:03.382Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":1,"result":{"tools":[{"name":"read_file","title":"Read File (Deprecated)","description":"Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.","inputSchema":{"$schema":"http://json-schema.org/draft-07/...[11759 chars truncated]...notations":{"readOnlyHint":true},"execution":{"taskSupport":"forbidden"},"outputSchema":{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"content":{"type":"string"}},"required":["content"],"additionalProperties":false}}]}} { metadata: undefined }
2026-03-01T09:44:53.641Z [filesystem] [info] Message from client: {"method":"tools/call","params":{"name":"list_allowed_directories","arguments":{}},"jsonrpc":"2.0","id":2} { metadata: undefined }
2026-03-01T09:44:53.643Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":2,"result":{"content":[{"type":"text","text":"Allowed directories:\nC:\\Users\\EHAB\\Desktop\nC:\\Users\\EHAB\\Documents\\projects"}],"structuredContent":{"content":"Allowed directories:\nC:\\Users\\EHAB\\Desktop\nC:\\Users\\EHAB\\Documents\\projects"}}} { metadata: undefined }
2026-03-01T09:45:02.441Z [filesystem] [info] Message from client: {"method":"tools/call","params":{"name":"directory_tree","arguments":{"path":"C:\\Users\\EHAB\\Documents\\projects"}},"jsonrpc":"2.0","id":3} { metadata: undefined }
2026-03-01T09:45:02.444Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":3,"result":{"content":[{"type":"text","text":"[\n  {\n    \"name\": \"Report_PDF2.pdf\",\n    \"type\": \"file\"\n  }\n]"}],"structuredContent":{"content":"[\n  {\n    \"name\": \"Report_PDF2.pdf\",\n    \"type\": \"file\"\n  }\n]"}}} { metadata: undefined }
2026-03-01T09:47:06.770Z [filesystem] [info] Message from client: {"method":"tools/call","params":{"name":"list_allowed_directories","arguments":{}},"jsonrpc":"2.0","id":4} { metadata: undefined }
2026-03-01T09:47:06.771Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":4,"result":{"content":[{"type":"text","text":"Allowed directories:\nC:\\Users\\EHAB\\Desktop\nC:\\Users\\EHAB\\Documents\\projects"}],"structuredContent":{"content":"Allowed directories:\nC:\\Users\\EHAB\\Desktop\nC:\\Users\\EHAB\\Documents\\projects"}}} { metadata: undefined }
2026-03-01T09:47:44.588Z [filesystem] [info] Message from client: {"method":"tools/call","params":{"name":"write_file","arguments":{"path":"C:\\Users\\EHAB\\Documents\\projects\\History_of_AI.txt","content":"================================================================\n        A REVIEW OF THE HISTORY OF ARTIFICIAL IN...[8499 chars truncated]...ng\nits future — responsibly, thoughtfully, and with humanity at the center.\n\n================================================================\nEND OF DOCUMENT\n================================================================\n"}},"jsonrpc":"2.0","id":5} { metadata: undefined }
2026-03-01T09:47:44.595Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":5,"result":{"content":[{"type":"text","text":"Successfully wrote to C:\\Users\\EHAB\\Documents\\projects\\History_of_AI.txt"}],"structuredContent":{"content":"Successfully wrote to C:\\Users\\EHAB\\Documents\\projects\\History_of_AI.txt"}}} { metadata: undefined }
2026-03-01T09:49:03.586Z [filesystem] [info] Message from client: {"method":"tools/call","params":{"name":"read_text_file","arguments":{"path":"C:\\Users\\EHAB\\Documents\\projects\\History_of_AI.txt"}},"jsonrpc":"2.0","id":6} { metadata: undefined }
2026-03-01T09:49:03.590Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":6,"result":{"content":[{"type":"text","text":"================================================================\n        A REVIEW OF THE HISTORY OF ARTIFICIAL INTELLIGENCE\n==============================================================...[17280 chars truncated]... essential for navigating\nits future — responsibly, thoughtfully, and with humanity at the center.\n\n================================================================\nEND OF DOCUMENT\n================================================================\n"}}} { metadata: undefined }
2026-03-01T09:50:48.223Z [filesystem] [info] Message from client: {"method":"tools/call","params":{"name":"write_file","arguments":{"path":"C:\\Users\\EHAB\\Documents\\projects\\History_of_AI_Arabic.txt","content":"================================================================\n        مراجعة تاريخ الذكاء الاصطناعي\n==...[7633 chars truncated]...رةً لا غنى\nعنها للتعامل مع مستقبله — بمسؤولية وتبصّر وإنسانية في صميم كل شيء.\n\n================================================================\nنهاية الوثيقة\n================================================================\n"}},"jsonrpc":"2.0","id":7} { metadata: undefined }
2026-03-01T09:50:48.230Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":7,"result":{"content":[{"type":"text","text":"Successfully wrote to C:\\Users\\EHAB\\Documents\\projects\\History_of_AI_Arabic.txt"}],"structuredContent":{"content":"Successfully wrote to C:\\Users\\EHAB\\Documents\\projects\\History_of_AI_Arabic.txt"}}} { metadata: undefined }
2026-03-01T13:17:37.325Z [filesystem] [info] Message from client: {"method":"tools/call","params":{"name":"read_media_file","arguments":{"path":"/mnt/user-data/uploads/logo.png"}},"jsonrpc":"2.0","id":8} { metadata: undefined }
2026-03-01T13:17:37.340Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":8,"result":{"content":[{"type":"text","text":"Access denied - path outside allowed directories: C:\\mnt\\user-data\\uploads\\logo.png not in C:\\Users\\EHAB\\Desktop, C:\\Users\\EHAB\\Documents\\projects"}],"isError":true}} { metadata: undefined }
2026-03-01T13:44:49.880Z [filesystem] [info] Message from client: {"method":"tools/call","params":{"name":"read_text_file","arguments":{"path":"/mnt/user-data/outputs/safebrowse-final.html","head":50}},"jsonrpc":"2.0","id":9} { metadata: undefined }
2026-03-01T13:44:49.883Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":9,"result":{"content":[{"type":"text","text":"Access denied - path outside allowed directories: C:\\mnt\\user-data\\outputs\\safebrowse-final.html not in C:\\Users\\EHAB\\Desktop, C:\\Users\\EHAB\\Documents\\projects"}],"isError":true}} { metadata: undefined }
2026-03-01T19:00:00.735Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-01T19:00:00.735Z [filesystem] [info] Server transport closed unexpectedly, this is likely due to the process exiting early. If you are developing this MCP server you can add output to stderr (i.e. `console.error('...')` in JavaScript, `print('...', file=sys.stderr)` in python) and it will appear in this log. { metadata: undefined }
2026-03-01T19:00:00.735Z [filesystem] [error] Server disconnected. For troubleshooting guidance, please visit our [debugging documentation](https://modelcontextprotocol.io/docs/tools/debugging) { metadata: { context: 'connection', stack: undefined } }
2026-03-01T19:00:00.776Z [filesystem] [info] Server transport closed { metadata: undefined }
2026-03-01T19:00:00.776Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-01T19:00:03.986Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-01T19:00:03.986Z [filesystem] [info] Initializing server... { metadata: undefined }
2026-03-01T19:00:03.986Z [filesystem] [info] Shutting down server... { metadata: undefined }
2026-03-01T19:00:04.002Z [filesystem] [info] Using MCP server command: C:\WINDOWS\System32\cmd.exe with args and path: {
  metadata: {
    args: [
      '/C',
      'C:\\Program Files\\nodejs\\npx.cmd',
      '-y',
      '@modelcontextprotocol/server-filesystem',
      'C:\\Users\\EHAB\\Desktop',
      'C:\\Users\\EHAB\\Documents\\projects',
      [length]: 6
    ],
    paths: [
      'C:\\Program Files\\nodejs',
      'C:\\Program Files\\Git\\cmd',
      'C:\\Program Files\\Git\\mingw64\\bin',
      'C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler',
      'C:\\WINDOWS\\system32',
      'C:\\WINDOWS',
      'C:\\WINDOWS\\System32\\Wbem',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
      'C:\\WINDOWS\\System32\\OpenSSH\\',
      'C:\\Program Files\\cursor\\resources\\app\\bin',
      'C:\\Program Files\\nodejs\\',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WindowsApps',
      'C:\\Users\\EHAB\\AppData\\Roaming\\npm',
      'C:\\Users\\EHAB\\AppData\\Local\\Programs\\Antigravity\\bin',
      [length]: 14
    ]
  }
} %o
2026-03-01T19:00:04.005Z [filesystem] [info] Server started and connected successfully { metadata: undefined }
2026-03-01T19:00:04.039Z [filesystem] [info] Message from client: {"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{"extensions":{"io.modelcontextprotocol/ui":{"mimeTypes":["text/html;profile=mcp-app"]}}},"clientInfo":{"name":"claude-ai","version":"0.1.0"}},"jsonrpc":"2.0","id":0} { metadata: undefined }
Secure MCP Filesystem Server running on stdio
2026-03-01T19:00:07.126Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":0,"result":{"protocolVersion":"2025-11-25","capabilities":{"tools":{"listChanged":true}},"serverInfo":{"name":"secure-filesystem-server","version":"0.2.0"}}} { metadata: undefined }
2026-03-01T19:00:07.126Z [filesystem] [info] Message from client: {"method":"notifications/initialized","jsonrpc":"2.0"} { metadata: undefined }
Client does not support MCP Roots, using allowed directories set from server args: [ 'C:\\Users\\EHAB\\Desktop', 'C:\\Users\\EHAB\\Documents\\projects' ]
2026-03-01T19:00:07.127Z [filesystem] [info] Message from client: {"method":"tools/list","params":{},"jsonrpc":"2.0","id":1} { metadata: undefined }
2026-03-01T19:00:07.129Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":1,"result":{"tools":[{"name":"read_file","title":"Read File (Deprecated)","description":"Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.","inputSchema":{"$schema":"http://json-schema.org/draft-07/...[11759 chars truncated]...notations":{"readOnlyHint":true},"execution":{"taskSupport":"forbidden"},"outputSchema":{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"content":{"type":"string"}},"required":["content"],"additionalProperties":false}}]}} { metadata: undefined }
2026-03-01T19:00:11.275Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-01T19:00:11.275Z [filesystem] [info] Server transport closed unexpectedly, this is likely due to the process exiting early. If you are developing this MCP server you can add output to stderr (i.e. `console.error('...')` in JavaScript, `print('...', file=sys.stderr)` in python) and it will appear in this log. { metadata: undefined }
2026-03-01T19:00:11.275Z [filesystem] [error] Server disconnected. For troubleshooting guidance, please visit our [debugging documentation](https://modelcontextprotocol.io/docs/tools/debugging) { metadata: { context: 'connection', stack: undefined } }
2026-03-01T19:00:11.299Z [filesystem] [info] Server transport closed { metadata: undefined }
2026-03-01T19:00:11.299Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-01T19:00:13.477Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-01T19:00:13.477Z [filesystem] [info] Shutting down server... { metadata: undefined }
2026-03-01T19:00:13.478Z [filesystem] [info] Initializing server... { metadata: undefined }
2026-03-01T19:00:13.493Z [filesystem] [info] Using MCP server command: C:\WINDOWS\System32\cmd.exe with args and path: {
  metadata: {
    args: [
      '/C',
      'C:\\Program Files\\nodejs\\npx.cmd',
      '-y',
      '@modelcontextprotocol/server-filesystem',
      'C:\\Users\\EHAB\\Desktop',
      'C:\\Users\\EHAB\\Documents\\projects',
      [length]: 6
    ],
    paths: [
      'C:\\Program Files\\nodejs',
      'C:\\Program Files\\Git\\cmd',
      'C:\\Program Files\\Git\\mingw64\\bin',
      'C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler',
      'C:\\WINDOWS\\system32',
      'C:\\WINDOWS',
      'C:\\WINDOWS\\System32\\Wbem',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
      'C:\\WINDOWS\\System32\\OpenSSH\\',
      'C:\\Program Files\\cursor\\resources\\app\\bin',
      'C:\\Program Files\\nodejs\\',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WindowsApps',
      'C:\\Users\\EHAB\\AppData\\Roaming\\npm',
      'C:\\Users\\EHAB\\AppData\\Local\\Programs\\Antigravity\\bin',
      [length]: 14
    ]
  }
} %o
2026-03-01T19:00:13.495Z [filesystem] [info] Server started and connected successfully { metadata: undefined }
2026-03-01T19:00:13.620Z [filesystem] [info] Message from client: {"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{"extensions":{"io.modelcontextprotocol/ui":{"mimeTypes":["text/html;profile=mcp-app"]}}},"clientInfo":{"name":"claude-ai","version":"0.1.0"}},"jsonrpc":"2.0","id":0} { metadata: undefined }
Secure MCP Filesystem Server running on stdio
2026-03-01T19:00:15.035Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":0,"result":{"protocolVersion":"2025-11-25","capabilities":{"tools":{"listChanged":true}},"serverInfo":{"name":"secure-filesystem-server","version":"0.2.0"}}} { metadata: undefined }
2026-03-01T19:00:15.035Z [filesystem] [info] Message from client: {"method":"notifications/initialized","jsonrpc":"2.0"} { metadata: undefined }
Client does not support MCP Roots, using allowed directories set from server args: [ 'C:\\Users\\EHAB\\Desktop', 'C:\\Users\\EHAB\\Documents\\projects' ]
2026-03-01T19:00:15.036Z [filesystem] [info] Message from client: {"method":"tools/list","params":{},"jsonrpc":"2.0","id":1} { metadata: undefined }
2026-03-01T19:00:15.039Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":1,"result":{"tools":[{"name":"read_file","title":"Read File (Deprecated)","description":"Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.","inputSchema":{"$schema":"http://json-schema.org/draft-07/...[11759 chars truncated]...notations":{"readOnlyHint":true},"execution":{"taskSupport":"forbidden"},"outputSchema":{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"content":{"type":"string"}},"required":["content"],"additionalProperties":false}}]}} { metadata: undefined }
2026-03-08T21:02:11.273Z [filesystem] [info] Initializing server... { metadata: undefined }
2026-03-08T21:02:11.304Z [filesystem] [info] Using MCP server command: C:\WINDOWS\System32\cmd.exe with args and path: {
  metadata: {
    args: [
      '/C',
      'C:\\Program Files\\nodejs\\npx.cmd',
      '-y',
      '@modelcontextprotocol/server-filesystem',
      'C:\\Users\\EHAB\\Desktop',
      'C:\\Users\\EHAB\\Documents\\projects',
      [length]: 6
    ],
    paths: [
      'C:\\Program Files\\nodejs',
      'C:\\Program Files\\Git\\cmd',
      'C:\\Program Files\\Git\\mingw64\\bin',
      'C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler',
      'C:\\WINDOWS\\system32',
      'C:\\WINDOWS',
      'C:\\WINDOWS\\System32\\Wbem',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
      'C:\\WINDOWS\\System32\\OpenSSH\\',
      'C:\\Program Files\\cursor\\resources\\app\\bin',
      'C:\\Program Files\\nodejs\\',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WindowsApps',
      'C:\\Users\\EHAB\\AppData\\Roaming\\npm',
      'C:\\Users\\EHAB\\AppData\\Local\\Programs\\Antigravity\\bin',
      [length]: 14
    ]
  }
} %o
2026-03-08T21:02:11.309Z [filesystem] [info] Server started and connected successfully { metadata: undefined }
2026-03-08T21:02:11.328Z [filesystem] [info] Message from client: {"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{"extensions":{"io.modelcontextprotocol/ui":{"mimeTypes":["text/html;profile=mcp-app"]}}},"clientInfo":{"name":"claude-ai","version":"0.1.0"}},"jsonrpc":"2.0","id":0} { metadata: undefined }
Secure MCP Filesystem Server running on stdio
2026-03-08T21:02:14.399Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":0,"result":{"protocolVersion":"2025-11-25","capabilities":{"tools":{"listChanged":true}},"serverInfo":{"name":"secure-filesystem-server","version":"0.2.0"}}} { metadata: undefined }
2026-03-08T21:02:14.400Z [filesystem] [info] Message from client: {"method":"notifications/initialized","jsonrpc":"2.0"} { metadata: undefined }
Client does not support MCP Roots, using allowed directories set from server args: [ 'C:\\Users\\EHAB\\Desktop', 'C:\\Users\\EHAB\\Documents\\projects' ]
2026-03-08T21:02:14.401Z [filesystem] [info] Message from client: {"method":"tools/list","params":{},"jsonrpc":"2.0","id":1} { metadata: undefined }
2026-03-08T21:02:14.403Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":1,"result":{"tools":[{"name":"read_file","title":"Read File (Deprecated)","description":"Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.","inputSchema":{"$schema":"http://json-schema.org/draft-07/...[11759 chars truncated]...notations":{"readOnlyHint":true},"execution":{"taskSupport":"forbidden"},"outputSchema":{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"content":{"type":"string"}},"required":["content"],"additionalProperties":false}}]}} { metadata: undefined }
2026-03-09T09:43:22.892Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-09T09:43:22.893Z [filesystem] [info] Server transport closed unexpectedly, this is likely due to the process exiting early. If you are developing this MCP server you can add output to stderr (i.e. `console.error('...')` in JavaScript, `print('...', file=sys.stderr)` in python) and it will appear in this log. { metadata: undefined }
2026-03-09T09:43:22.893Z [filesystem] [error] Server disconnected. For troubleshooting guidance, please visit our [debugging documentation](https://modelcontextprotocol.io/docs/tools/debugging) { metadata: { context: 'connection', stack: undefined } }
npm notice
npm notice New minor version of npm available! 11.6.2 -> 11.11.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.11.0
npm notice To update run: npm install -g npm@11.11.0
npm notice
2026-03-09T09:43:22.924Z [filesystem] [info] Server transport closed { metadata: undefined }
2026-03-09T09:43:22.924Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-09T09:43:42.316Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-09T09:43:42.317Z [filesystem] [info] Initializing server... { metadata: undefined }
2026-03-09T09:43:42.316Z [filesystem] [info] Shutting down server... { metadata: undefined }
2026-03-09T09:43:42.335Z [filesystem] [info] Using MCP server command: C:\WINDOWS\System32\cmd.exe with args and path: {
  metadata: {
    args: [
      '/C',
      'C:\\Program Files\\nodejs\\npx.cmd',
      '-y',
      '@modelcontextprotocol/server-filesystem',
      'C:\\Users\\EHAB\\Desktop',
      'C:\\Users\\EHAB\\Documents\\projects',
      [length]: 6
    ],
    paths: [
      'C:\\Program Files\\nodejs',
      'C:\\Program Files\\Git\\cmd',
      'C:\\Program Files\\Git\\mingw64\\bin',
      'C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler',
      'C:\\WINDOWS\\system32',
      'C:\\WINDOWS',
      'C:\\WINDOWS\\System32\\Wbem',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
      'C:\\WINDOWS\\System32\\OpenSSH\\',
      'C:\\Program Files\\cursor\\resources\\app\\bin',
      'C:\\Program Files\\nodejs\\',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WindowsApps',
      'C:\\Users\\EHAB\\AppData\\Roaming\\npm',
      'C:\\Users\\EHAB\\AppData\\Local\\Programs\\Antigravity\\bin',
      [length]: 14
    ]
  }
} %o
2026-03-09T09:43:42.340Z [filesystem] [info] Server started and connected successfully { metadata: undefined }
2026-03-09T09:43:42.483Z [filesystem] [info] Message from client: {"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{"extensions":{"io.modelcontextprotocol/ui":{"mimeTypes":["text/html;profile=mcp-app"]}}},"clientInfo":{"name":"claude-ai","version":"0.1.0"}},"jsonrpc":"2.0","id":0} { metadata: undefined }
Secure MCP Filesystem Server running on stdio
2026-03-09T09:43:43.424Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":0,"result":{"protocolVersion":"2025-11-25","capabilities":{"tools":{"listChanged":true}},"serverInfo":{"name":"secure-filesystem-server","version":"0.2.0"}}} { metadata: undefined }
2026-03-09T09:43:43.424Z [filesystem] [info] Message from client: {"method":"notifications/initialized","jsonrpc":"2.0"} { metadata: undefined }
Client does not support MCP Roots, using allowed directories set from server args: [ 'C:\\Users\\EHAB\\Desktop', 'C:\\Users\\EHAB\\Documents\\projects' ]
2026-03-09T09:43:43.425Z [filesystem] [info] Message from client: {"method":"tools/list","params":{},"jsonrpc":"2.0","id":1} { metadata: undefined }
2026-03-09T09:43:43.428Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":1,"result":{"tools":[{"name":"read_file","title":"Read File (Deprecated)","description":"Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.","inputSchema":{"$schema":"http://json-schema.org/draft-07/...[11759 chars truncated]...notations":{"readOnlyHint":true},"execution":{"taskSupport":"forbidden"},"outputSchema":{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"content":{"type":"string"}},"required":["content"],"additionalProperties":false}}]}} { metadata: undefined }
2026-03-09T09:43:55.837Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-09T09:43:55.837Z [filesystem] [info] Server transport closed unexpectedly, this is likely due to the process exiting early. If you are developing this MCP server you can add output to stderr (i.e. `console.error('...')` in JavaScript, `print('...', file=sys.stderr)` in python) and it will appear in this log. { metadata: undefined }
2026-03-09T09:43:55.837Z [filesystem] [error] Server disconnected. For troubleshooting guidance, please visit our [debugging documentation](https://modelcontextprotocol.io/docs/tools/debugging) { metadata: { context: 'connection', stack: undefined } }
2026-03-09T09:43:55.860Z [filesystem] [info] Server transport closed { metadata: undefined }
2026-03-09T09:43:55.860Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-09T09:44:28.047Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-09T09:44:28.047Z [filesystem] [info] Shutting down server... { metadata: undefined }
2026-03-09T09:44:28.048Z [filesystem] [info] Initializing server... { metadata: undefined }
2026-03-09T09:44:28.067Z [filesystem] [info] Using MCP server command: C:\WINDOWS\System32\cmd.exe with args and path: {
  metadata: {
    args: [
      '/C',
      'C:\\Program Files\\nodejs\\npx.cmd',
      '-y',
      '@modelcontextprotocol/server-filesystem',
      'C:\\Users\\EHAB\\Desktop',
      'C:\\Users\\EHAB\\Documents\\projects',
      [length]: 6
    ],
    paths: [
      'C:\\Program Files\\nodejs',
      'C:\\Program Files\\Git\\cmd',
      'C:\\Program Files\\Git\\mingw64\\bin',
      'C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler',
      'C:\\WINDOWS\\system32',
      'C:\\WINDOWS',
      'C:\\WINDOWS\\System32\\Wbem',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
      'C:\\WINDOWS\\System32\\OpenSSH\\',
      'C:\\Program Files\\cursor\\resources\\app\\bin',
      'C:\\Program Files\\nodejs\\',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WindowsApps',
      'C:\\Users\\EHAB\\AppData\\Roaming\\npm',
      'C:\\Users\\EHAB\\AppData\\Local\\Programs\\Antigravity\\bin',
      [length]: 14
    ]
  }
} %o
2026-03-09T09:44:28.069Z [filesystem] [info] Server started and connected successfully { metadata: undefined }
2026-03-09T09:44:28.194Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-09T09:44:28.194Z [filesystem] [info] Server transport closed (intentional shutdown) { metadata: undefined }
2026-03-09T09:44:28.194Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-09T09:44:28.194Z [filesystem] [info] Initializing server... { metadata: undefined }
2026-03-09T09:44:28.194Z [filesystem] [info] Shutting down server... { metadata: undefined }
2026-03-09T09:44:28.216Z [filesystem] [info] Using MCP server command: C:\WINDOWS\System32\cmd.exe with args and path: {
  metadata: {
    args: [
      '/C',
      'C:\\Program Files\\nodejs\\npx.cmd',
      '-y',
      '@modelcontextprotocol/server-filesystem',
      'C:\\Users\\EHAB\\Desktop',
      'C:\\Users\\EHAB\\Documents\\projects',
      [length]: 6
    ],
    paths: [
      'C:\\Program Files\\nodejs',
      'C:\\Program Files\\Git\\cmd',
      'C:\\Program Files\\Git\\mingw64\\bin',
      'C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler',
      'C:\\WINDOWS\\system32',
      'C:\\WINDOWS',
      'C:\\WINDOWS\\System32\\Wbem',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
      'C:\\WINDOWS\\System32\\OpenSSH\\',
      'C:\\Program Files\\cursor\\resources\\app\\bin',
      'C:\\Program Files\\nodejs\\',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WindowsApps',
      'C:\\Users\\EHAB\\AppData\\Roaming\\npm',
      'C:\\Users\\EHAB\\AppData\\Local\\Programs\\Antigravity\\bin',
      [length]: 14
    ]
  }
} %o
2026-03-09T09:44:28.218Z [filesystem] [info] Server started and connected successfully { metadata: undefined }
2026-03-09T09:44:28.256Z [filesystem] [info] Message from client: {"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{"extensions":{"io.modelcontextprotocol/ui":{"mimeTypes":["text/html;profile=mcp-app"]}}},"clientInfo":{"name":"claude-ai","version":"0.1.0"}},"jsonrpc":"2.0","id":0} { metadata: undefined }
Secure MCP Filesystem Server running on stdio
2026-03-09T09:44:29.437Z [filesystem] [info] Server transport closed { metadata: undefined }
2026-03-09T09:44:29.438Z [filesystem] [info] Client transport closed { metadata: undefined }
Secure MCP Filesystem Server running on stdio
2026-03-09T09:44:29.510Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":0,"result":{"protocolVersion":"2025-11-25","capabilities":{"tools":{"listChanged":true}},"serverInfo":{"name":"secure-filesystem-server","version":"0.2.0"}}} { metadata: undefined }
2026-03-09T09:44:29.510Z [filesystem] [info] Message from client: {"method":"notifications/initialized","jsonrpc":"2.0"} { metadata: undefined }
2026-03-09T09:44:29.511Z [filesystem] [info] Message from client: {"method":"tools/list","params":{},"jsonrpc":"2.0","id":1} { metadata: undefined }
Client does not support MCP Roots, using allowed directories set from server args: [ 'C:\\Users\\EHAB\\Desktop', 'C:\\Users\\EHAB\\Documents\\projects' ]
2026-03-09T09:44:29.513Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":1,"result":{"tools":[{"name":"read_file","title":"Read File (Deprecated)","description":"Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.","inputSchema":{"$schema":"http://json-schema.org/draft-07/...[11759 chars truncated]...notations":{"readOnlyHint":true},"execution":{"taskSupport":"forbidden"},"outputSchema":{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"content":{"type":"string"}},"required":["content"],"additionalProperties":false}}]}} { metadata: undefined }
2026-03-09T09:46:21.557Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-09T09:46:21.557Z [filesystem] [info] Server transport closed unexpectedly, this is likely due to the process exiting early. If you are developing this MCP server you can add output to stderr (i.e. `console.error('...')` in JavaScript, `print('...', file=sys.stderr)` in python) and it will appear in this log. { metadata: undefined }
2026-03-09T09:46:21.557Z [filesystem] [error] Server disconnected. For troubleshooting guidance, please visit our [debugging documentation](https://modelcontextprotocol.io/docs/tools/debugging) { metadata: { context: 'connection', stack: undefined } }
2026-03-09T09:46:21.580Z [filesystem] [info] Server transport closed { metadata: undefined }
2026-03-09T09:46:21.580Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-09T09:46:22.897Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-09T09:46:22.897Z [filesystem] [info] Initializing server... { metadata: undefined }
2026-03-09T09:46:22.897Z [filesystem] [info] Shutting down server... { metadata: undefined }
2026-03-09T09:46:22.917Z [filesystem] [info] Using MCP server command: C:\WINDOWS\System32\cmd.exe with args and path: {
  metadata: {
    args: [
      '/C',
      'C:\\Program Files\\nodejs\\npx.cmd',
      '-y',
      '@modelcontextprotocol/server-filesystem',
      'C:\\Users\\EHAB\\Desktop',
      'C:\\Users\\EHAB\\Documents\\projects',
      [length]: 6
    ],
    paths: [
      'C:\\Program Files\\nodejs',
      'C:\\Program Files\\Git\\cmd',
      'C:\\Program Files\\Git\\mingw64\\bin',
      'C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler',
      'C:\\WINDOWS\\system32',
      'C:\\WINDOWS',
      'C:\\WINDOWS\\System32\\Wbem',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
      'C:\\WINDOWS\\System32\\OpenSSH\\',
      'C:\\Program Files\\cursor\\resources\\app\\bin',
      'C:\\Program Files\\nodejs\\',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WindowsApps',
      'C:\\Users\\EHAB\\AppData\\Roaming\\npm',
      'C:\\Users\\EHAB\\AppData\\Local\\Programs\\Antigravity\\bin',
      [length]: 14
    ]
  }
} %o
2026-03-09T09:46:22.920Z [filesystem] [info] Server started and connected successfully { metadata: undefined }
2026-03-09T09:46:22.946Z [filesystem] [info] Message from client: {"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{"extensions":{"io.modelcontextprotocol/ui":{"mimeTypes":["text/html;profile=mcp-app"]}}},"clientInfo":{"name":"claude-ai","version":"0.1.0"}},"jsonrpc":"2.0","id":0} { metadata: undefined }
Secure MCP Filesystem Server running on stdio
2026-03-09T09:46:24.040Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":0,"result":{"protocolVersion":"2025-11-25","capabilities":{"tools":{"listChanged":true}},"serverInfo":{"name":"secure-filesystem-server","version":"0.2.0"}}} { metadata: undefined }
2026-03-09T09:46:24.040Z [filesystem] [info] Message from client: {"method":"notifications/initialized","jsonrpc":"2.0"} { metadata: undefined }
2026-03-09T09:46:24.041Z [filesystem] [info] Message from client: {"method":"tools/list","params":{},"jsonrpc":"2.0","id":1} { metadata: undefined }
Client does not support MCP Roots, using allowed directories set from server args: [ 'C:\\Users\\EHAB\\Desktop', 'C:\\Users\\EHAB\\Documents\\projects' ]
2026-03-09T09:46:24.043Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":1,"result":{"tools":[{"name":"read_file","title":"Read File (Deprecated)","description":"Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.","inputSchema":{"$schema":"http://json-schema.org/draft-07/...[11759 chars truncated]...notations":{"readOnlyHint":true},"execution":{"taskSupport":"forbidden"},"outputSchema":{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"content":{"type":"string"}},"required":["content"],"additionalProperties":false}}]}} { metadata: undefined }
2026-03-09T12:27:07.436Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-09T12:27:07.437Z [filesystem] [info] Server transport closed unexpectedly, this is likely due to the process exiting early. If you are developing this MCP server you can add output to stderr (i.e. `console.error('...')` in JavaScript, `print('...', file=sys.stderr)` in python) and it will appear in this log. { metadata: undefined }
2026-03-09T12:27:07.437Z [filesystem] [error] Server disconnected. For troubleshooting guidance, please visit our [debugging documentation](https://modelcontextprotocol.io/docs/tools/debugging) { metadata: { context: 'connection', stack: undefined } }
2026-03-09T12:27:07.465Z [filesystem] [info] Server transport closed { metadata: undefined }
2026-03-09T12:27:07.465Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-09T12:27:08.820Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-09T12:27:08.820Z [filesystem] [info] Initializing server... { metadata: undefined }
2026-03-09T12:27:08.820Z [filesystem] [info] Shutting down server... { metadata: undefined }
2026-03-09T12:27:08.839Z [filesystem] [info] Using MCP server command: C:\WINDOWS\System32\cmd.exe with args and path: {
  metadata: {
    args: [
      '/C',
      'C:\\Program Files\\nodejs\\npx.cmd',
      '-y',
      '@modelcontextprotocol/server-filesystem',
      'C:\\Users\\EHAB\\Desktop',
      'C:\\Users\\EHAB\\Documents\\projects',
      [length]: 6
    ],
    paths: [
      'C:\\Program Files\\nodejs',
      'C:\\Program Files\\Git\\cmd',
      'C:\\Program Files\\Git\\mingw64\\bin',
      'C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler',
      'C:\\WINDOWS\\system32',
      'C:\\WINDOWS',
      'C:\\WINDOWS\\System32\\Wbem',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
      'C:\\WINDOWS\\System32\\OpenSSH\\',
      'C:\\Program Files\\cursor\\resources\\app\\bin',
      'C:\\Program Files\\nodejs\\',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WindowsApps',
      'C:\\Users\\EHAB\\AppData\\Roaming\\npm',
      'C:\\Users\\EHAB\\AppData\\Local\\Programs\\Antigravity\\bin',
      [length]: 14
    ]
  }
} %o
2026-03-09T12:27:08.842Z [filesystem] [info] Server started and connected successfully { metadata: undefined }
2026-03-09T12:27:08.866Z [filesystem] [info] Message from client: {"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{"extensions":{"io.modelcontextprotocol/ui":{"mimeTypes":["text/html;profile=mcp-app"]}}},"clientInfo":{"name":"claude-ai","version":"0.1.0"}},"jsonrpc":"2.0","id":0} { metadata: undefined }
Secure MCP Filesystem Server running on stdio
2026-03-09T12:27:10.723Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":0,"result":{"protocolVersion":"2025-11-25","capabilities":{"tools":{"listChanged":true}},"serverInfo":{"name":"secure-filesystem-server","version":"0.2.0"}}} { metadata: undefined }
2026-03-09T12:27:10.724Z [filesystem] [info] Message from client: {"method":"notifications/initialized","jsonrpc":"2.0"} { metadata: undefined }
2026-03-09T12:27:10.724Z [filesystem] [info] Message from client: {"method":"tools/list","params":{},"jsonrpc":"2.0","id":1} { metadata: undefined }
Client does not support MCP Roots, using allowed directories set from server args: [ 'C:\\Users\\EHAB\\Desktop', 'C:\\Users\\EHAB\\Documents\\projects' ]
2026-03-09T12:27:10.727Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":1,"result":{"tools":[{"name":"read_file","title":"Read File (Deprecated)","description":"Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.","inputSchema":{"$schema":"http://json-schema.org/draft-07/...[11759 chars truncated]...notations":{"readOnlyHint":true},"execution":{"taskSupport":"forbidden"},"outputSchema":{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"content":{"type":"string"}},"required":["content"],"additionalProperties":false}}]}} { metadata: undefined }
2026-03-12T09:19:55.102Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-12T09:19:55.102Z [filesystem] [info] Server transport closed unexpectedly, this is likely due to the process exiting early. If you are developing this MCP server you can add output to stderr (i.e. `console.error('...')` in JavaScript, `print('...', file=sys.stderr)` in python) and it will appear in this log. { metadata: undefined }
2026-03-12T09:19:55.102Z [filesystem] [error] Server disconnected. For troubleshooting guidance, please visit our [debugging documentation](https://modelcontextprotocol.io/docs/tools/debugging) { metadata: { context: 'connection', stack: undefined } }
2026-03-12T09:19:55.147Z [filesystem] [info] Server transport closed { metadata: undefined }
2026-03-12T09:19:55.147Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-12T09:19:59.171Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-12T09:19:59.171Z [filesystem] [info] Shutting down server... { metadata: undefined }
2026-03-12T09:19:59.171Z [filesystem] [info] Initializing server... { metadata: undefined }
2026-03-12T09:19:59.192Z [filesystem] [info] Using MCP server command: C:\WINDOWS\System32\cmd.exe with args and path: {
  metadata: {
    args: [
      '/C',
      'C:\\Program Files\\nodejs\\npx.cmd',
      '-y',
      '@modelcontextprotocol/server-filesystem',
      'C:\\Users\\EHAB\\Desktop',
      'C:\\Users\\EHAB\\Documents\\projects',
      [length]: 6
    ],
    paths: [
      'C:\\Program Files\\nodejs',
      'C:\\Program Files\\Git\\cmd',
      'C:\\Program Files\\Git\\mingw64\\bin',
      'C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler',
      'C:\\WINDOWS\\system32',
      'C:\\WINDOWS',
      'C:\\WINDOWS\\System32\\Wbem',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
      'C:\\WINDOWS\\System32\\OpenSSH\\',
      'C:\\Program Files\\cursor\\resources\\app\\bin',
      'C:\\Program Files\\nodejs\\',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WindowsApps',
      'C:\\Users\\EHAB\\AppData\\Roaming\\npm',
      'C:\\Users\\EHAB\\AppData\\Local\\Programs\\Antigravity\\bin',
      [length]: 14
    ]
  }
} %o
2026-03-12T09:19:59.197Z [filesystem] [info] Server started and connected successfully { metadata: undefined }
2026-03-12T09:19:59.285Z [filesystem] [info] Message from client: {"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{"extensions":{"io.modelcontextprotocol/ui":{"mimeTypes":["text/html;profile=mcp-app"]}}},"clientInfo":{"name":"claude-ai","version":"0.1.0"}},"jsonrpc":"2.0","id":0} { metadata: undefined }
Secure MCP Filesystem Server running on stdio
2026-03-12T09:20:00.758Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":0,"result":{"protocolVersion":"2025-11-25","capabilities":{"tools":{"listChanged":true}},"serverInfo":{"name":"secure-filesystem-server","version":"0.2.0"}}} { metadata: undefined }
2026-03-12T09:20:00.758Z [filesystem] [info] Message from client: {"method":"notifications/initialized","jsonrpc":"2.0"} { metadata: undefined }
Client does not support MCP Roots, using allowed directories set from server args: [ 'C:\\Users\\EHAB\\Desktop', 'C:\\Users\\EHAB\\Documents\\projects' ]
2026-03-12T09:20:00.759Z [filesystem] [info] Message from client: {"method":"tools/list","params":{},"jsonrpc":"2.0","id":1} { metadata: undefined }
2026-03-12T09:20:00.762Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":1,"result":{"tools":[{"name":"read_file","title":"Read File (Deprecated)","description":"Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.","inputSchema":{"$schema":"http://json-schema.org/draft-07/...[11759 chars truncated]...notations":{"readOnlyHint":true},"execution":{"taskSupport":"forbidden"},"outputSchema":{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"content":{"type":"string"}},"required":["content"],"additionalProperties":false}}]}} { metadata: undefined }
2026-03-16T08:35:56.469Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-16T08:35:56.469Z [filesystem] [info] Server transport closed unexpectedly, this is likely due to the process exiting early. If you are developing this MCP server you can add output to stderr (i.e. `console.error('...')` in JavaScript, `print('...', file=sys.stderr)` in python) and it will appear in this log. { metadata: undefined }
2026-03-16T08:35:56.469Z [filesystem] [error] Server disconnected. For troubleshooting guidance, please visit our [debugging documentation](https://modelcontextprotocol.io/docs/tools/debugging) { metadata: { context: 'connection', stack: undefined } }
2026-03-16T08:35:56.611Z [filesystem] [info] Server transport closed { metadata: undefined }
2026-03-16T08:35:56.611Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-16T08:36:00.113Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-03-16T08:36:00.113Z [filesystem] [info] Shutting down server... { metadata: undefined }
2026-03-16T08:36:00.114Z [filesystem] [info] Initializing server... { metadata: undefined }
2026-03-16T08:36:00.130Z [filesystem] [info] Using MCP server command: C:\WINDOWS\System32\cmd.exe with args and path: {
  metadata: {
    args: [
      '/C',
      'C:\\Program Files\\nodejs\\npx.cmd',
      '-y',
      '@modelcontextprotocol/server-filesystem',
      'C:\\Users\\EHAB\\Desktop',
      'C:\\Users\\EHAB\\Documents\\projects',
      [length]: 6
    ],
    paths: [
      'C:\\Program Files\\nodejs',
      'C:\\Program Files\\Git\\cmd',
      'C:\\Program Files\\Git\\mingw64\\bin',
      'C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler',
      'C:\\WINDOWS\\system32',
      'C:\\WINDOWS',
      'C:\\WINDOWS\\System32\\Wbem',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
      'C:\\WINDOWS\\System32\\OpenSSH\\',
      'C:\\Program Files\\cursor\\resources\\app\\bin',
      'C:\\Program Files\\nodejs\\',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WindowsApps',
      'C:\\Users\\EHAB\\AppData\\Roaming\\npm',
      'C:\\Users\\EHAB\\AppData\\Local\\Programs\\Antigravity\\bin',
      [length]: 14
    ]
  }
} %o
2026-03-16T08:36:00.135Z [filesystem] [info] Server started and connected successfully { metadata: undefined }
2026-03-16T08:36:00.186Z [filesystem] [info] Message from client: {"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{"extensions":{"io.modelcontextprotocol/ui":{"mimeTypes":["text/html;profile=mcp-app"]}}},"clientInfo":{"name":"claude-ai","version":"0.1.0"}},"jsonrpc":"2.0","id":0} { metadata: undefined }
Secure MCP Filesystem Server running on stdio
2026-03-16T08:36:02.552Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":0,"result":{"protocolVersion":"2025-11-25","capabilities":{"tools":{"listChanged":true}},"serverInfo":{"name":"secure-filesystem-server","version":"0.2.0"}}} { metadata: undefined }
2026-03-16T08:36:02.553Z [filesystem] [info] Message from client: {"method":"notifications/initialized","jsonrpc":"2.0"} { metadata: undefined }
2026-03-16T08:36:02.554Z [filesystem] [info] Message from client: {"method":"tools/list","params":{},"jsonrpc":"2.0","id":1} { metadata: undefined }
Client does not support MCP Roots, using allowed directories set from server args: [ 'C:\\Users\\EHAB\\Desktop', 'C:\\Users\\EHAB\\Documents\\projects' ]
2026-03-16T08:36:02.557Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":1,"result":{"tools":[{"name":"read_file","title":"Read File (Deprecated)","description":"Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.","inputSchema":{"$schema":"http://json-schema.org/draft-07/...[11759 chars truncated]...notations":{"readOnlyHint":true},"execution":{"taskSupport":"forbidden"},"outputSchema":{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"content":{"type":"string"}},"required":["content"],"additionalProperties":false}}]}} { metadata: undefined }
2026-03-17T08:11:51.931Z [filesystem] [info] Initializing server... { metadata: undefined }
2026-03-17T08:11:51.965Z [filesystem] [info] Using MCP server command: C:\WINDOWS\System32\cmd.exe with args and path: {
  metadata: {
    args: [
      '/C',
      'C:\\Program Files\\nodejs\\npx.cmd',
      '-y',
      '@modelcontextprotocol/server-filesystem',
      'C:\\Users\\EHAB\\Desktop',
      'C:\\Users\\EHAB\\Documents\\projects',
      [length]: 6
    ],
    paths: [
      'C:\\Program Files\\nodejs',
      'C:\\Program Files\\Git\\cmd',
      'C:\\Program Files\\Git\\mingw64\\bin',
      'C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler',
      'C:\\WINDOWS\\system32',
      'C:\\WINDOWS',
      'C:\\WINDOWS\\System32\\Wbem',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
      'C:\\WINDOWS\\System32\\OpenSSH\\',
      'C:\\Program Files\\cursor\\resources\\app\\bin',
      'C:\\Program Files\\nodejs\\',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WindowsApps',
      'C:\\Users\\EHAB\\AppData\\Roaming\\npm',
      'C:\\Users\\EHAB\\AppData\\Local\\Programs\\Antigravity\\bin',
      [length]: 14
    ]
  }
} %o
2026-03-17T08:11:51.973Z [filesystem] [info] Server started and connected successfully { metadata: undefined }
2026-03-17T08:11:52.041Z [filesystem] [info] Message from client: {"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{"extensions":{"io.modelcontextprotocol/ui":{"mimeTypes":["text/html;profile=mcp-app"]}}},"clientInfo":{"name":"claude-ai","version":"0.1.0"}},"jsonrpc":"2.0","id":0} { metadata: undefined }
Secure MCP Filesystem Server running on stdio
2026-03-17T08:11:54.598Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":0,"result":{"protocolVersion":"2025-11-25","capabilities":{"tools":{"listChanged":true}},"serverInfo":{"name":"secure-filesystem-server","version":"0.2.0"}}} { metadata: undefined }
2026-03-17T08:11:54.599Z [filesystem] [info] Message from client: {"method":"notifications/initialized","jsonrpc":"2.0"} { metadata: undefined }
Client does not support MCP Roots, using allowed directories set from server args: [ 'C:\\Users\\EHAB\\Desktop', 'C:\\Users\\EHAB\\Documents\\projects' ]
2026-03-17T08:11:54.600Z [filesystem] [info] Message from client: {"method":"tools/list","params":{},"jsonrpc":"2.0","id":1} { metadata: undefined }
2026-03-17T08:11:54.602Z [filesystem] [info] Message from server: {"jsonrpc":"2.0","id":1,"result":{"tools":[{"name":"read_file","title":"Read File (Deprecated)","description":"Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.","inputSchema":{"$schema":"http://json-schema.org/draft-07/...[11759 chars truncated]...notations":{"readOnlyHint":true},"execution":{"taskSupport":"forbidden"},"outputSchema":{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"content":{"type":"string"}},"required":["content"],"additionalProperties":false}}]}} { metadata: undefined }
2026-05-02T13:34:24.352Z [filesystem] [info] Initializing server... { metadata: undefined }
2026-05-02T13:34:24.378Z [filesystem] [info] Using MCP server command: C:\WINDOWS\System32\cmd.exe with args and path: {
  metadata: {
    args: [
      '/C',
      'C:\\Program Files\\nodejs\\npx.cmd',
      '-y',
      '@modelcontextprotocol/server-filesystem',
      'C:\\Users\\EHAB\\Desktop',
      'C:\\Users\\EHAB\\Documents\\projects',
      [length]: 6
    ],
    paths: [
      'C:\\Program Files\\nodejs',
      'C:\\Program Files\\Git\\cmd',
      'C:\\Program Files\\Git\\mingw64\\bin',
      'C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler',
      'C:\\WINDOWS\\system32',
      'C:\\WINDOWS',
      'C:\\WINDOWS\\System32\\Wbem',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
      'C:\\WINDOWS\\System32\\OpenSSH\\',
      'C:\\Program Files\\cursor\\resources\\app\\bin',
      'C:\\Program Files\\nodejs\\',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WindowsApps',
      'C:\\Users\\EHAB\\AppData\\Roaming\\npm',
      'C:\\Users\\EHAB\\AppData\\Local\\Programs\\Antigravity\\bin',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-8.1-full_build\\bin',
      [length]: 15
    ]
  }
} %o
2026-05-02T13:34:24.386Z [filesystem] [info] Server started and connected successfully { metadata: undefined }
2026-05-02T13:34:24.418Z [filesystem] [info] Message from client: {"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{"extensions":{"io.modelcontextprotocol/ui":{"mimeTypes":["text/html;profile=mcp-app"]}}},"clientInfo":{"name":"claude-ai","version":"0.1.0"}},"jsonrpc":"2.0","id":0} { metadata: undefined }
Error accessing directory C:\Users\EHAB\Desktop: Error: ENOENT: no such file or directory, stat 'C:\Users\EHAB\Desktop'
    at async Object.stat (node:internal/fs/promises:1040:18)
    at async file:///C:/Users/EHAB/AppData/Local/npm-cache/_npx/a3241bba59c344f5/node_modules/@modelcontextprotocol/server-filesystem/dist/index.js:43:23
    at async Promise.all (index 0)
    at async file:///C:/Users/EHAB/AppData/Local/npm-cache/_npx/a3241bba59c344f5/node_modules/@modelcontextprotocol/server-filesystem/dist/index.js:41:1 {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'stat',
  path: 'C:\\Users\\EHAB\\Desktop'
}
2026-05-02T13:34:26.808Z [filesystem] [info] Server transport closed { metadata: undefined }
2026-05-02T13:34:26.808Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-05-02T13:34:26.808Z [filesystem] [info] Server transport closed unexpectedly, this is likely due to the process exiting early. If you are developing this MCP server you can add output to stderr (i.e. `console.error('...')` in JavaScript, `print('...', file=sys.stderr)` in python) and it will appear in this log. { metadata: undefined }
2026-05-02T13:34:26.808Z [filesystem] [error] Server disconnected. For troubleshooting guidance, please visit our [debugging documentation](https://modelcontextprotocol.io/docs/tools/debugging) { metadata: { context: 'connection', stack: undefined } }
2026-05-02T13:34:26.808Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-05-25T10:32:07.619Z [filesystem] [info] Initializing server... { metadata: undefined }
2026-05-25T10:32:07.636Z [filesystem] [info] Using MCP server command: C:\WINDOWS\System32\cmd.exe with args and path: {
  metadata: {
    args: [
      '/C',
      'C:\\Program Files\\nodejs\\npx.cmd',
      '-y',
      '@modelcontextprotocol/server-filesystem',
      'C:\\Users\\EHAB\\Desktop',
      'C:\\Users\\EHAB\\Documents\\projects',
      [length]: 6
    ],
    paths: [
      'C:\\Program Files\\nodejs',
      'C:\\Program Files\\Git\\cmd',
      'C:\\Program Files\\Git\\mingw64\\bin',
      'C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler',
      'C:\\WINDOWS\\system32',
      'C:\\WINDOWS',
      'C:\\WINDOWS\\System32\\Wbem',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
      'C:\\WINDOWS\\System32\\OpenSSH\\',
      'C:\\Program Files\\cursor\\resources\\app\\bin',
      'C:\\Program Files\\nodejs\\',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WindowsApps',
      'C:\\Users\\EHAB\\AppData\\Roaming\\npm',
      'C:\\Users\\EHAB\\AppData\\Local\\Programs\\Antigravity\\bin',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-8.1-full_build\\bin',
      [length]: 15
    ]
  }
} %o
2026-05-25T10:32:07.643Z [filesystem] [info] Server started and connected successfully { metadata: undefined }
2026-05-25T10:32:07.646Z [filesystem] [info] Message from client: {"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{"extensions":{"io.modelcontextprotocol/ui":{"mimeTypes":["text/html;profile=mcp-app"]}}},"clientInfo":{"name":"claude-ai","version":"0.1.0"}},"jsonrpc":"2.0","id":0} { metadata: undefined }
Error accessing directory C:\Users\EHAB\Desktop: Error: ENOENT: no such file or directory, stat 'C:\Users\EHAB\Desktop'
    at async Object.stat (node:internal/fs/promises:1040:18)
    at async file:///C:/Users/EHAB/AppData/Local/npm-cache/_npx/a3241bba59c344f5/node_modules/@modelcontextprotocol/server-filesystem/dist/index.js:43:23
    at async Promise.all (index 0)
    at async file:///C:/Users/EHAB/AppData/Local/npm-cache/_npx/a3241bba59c344f5/node_modules/@modelcontextprotocol/server-filesystem/dist/index.js:41:1 {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'stat',
  path: 'C:\\Users\\EHAB\\Desktop'
}
2026-05-25T10:32:10.444Z [filesystem] [info] Server transport closed { metadata: undefined }
2026-05-25T10:32:10.444Z [filesystem] [info] Server transport closed unexpectedly, this is likely due to the process exiting early. If you are developing this MCP server you can add output to stderr (i.e. `console.error('...')` in JavaScript, `print('...', file=sys.stderr)` in python) and it will appear in this log. { metadata: undefined }
2026-05-25T10:32:10.444Z [filesystem] [error] Server disconnected. For troubleshooting guidance, please visit our [debugging documentation](https://modelcontextprotocol.io/docs/tools/debugging) { metadata: { context: 'connection', stack: undefined } }
2026-05-25T10:32:10.445Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-05-25T10:32:10.445Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-05-25T10:35:16.860Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-05-25T10:35:16.860Z [filesystem] [info] Shutting down server... { metadata: undefined }
2026-05-25T10:35:16.860Z [filesystem] [info] Initializing server... { metadata: undefined }
2026-05-25T10:35:16.863Z [filesystem] [info] Using MCP server command: C:\WINDOWS\System32\cmd.exe with args and path: {
  metadata: {
    args: [
      '/C',
      'C:\\Program Files\\nodejs\\npx.cmd',
      '-y',
      '@modelcontextprotocol/server-filesystem',
      'C:\\Users\\EHAB\\Desktop',
      'C:\\Users\\EHAB\\Documents\\projects',
      [length]: 6
    ],
    paths: [
      'C:\\Program Files\\nodejs',
      'C:\\Program Files\\Git\\cmd',
      'C:\\Program Files\\Git\\mingw64\\bin',
      'C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler',
      'C:\\WINDOWS\\system32',
      'C:\\WINDOWS',
      'C:\\WINDOWS\\System32\\Wbem',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
      'C:\\WINDOWS\\System32\\OpenSSH\\',
      'C:\\Program Files\\cursor\\resources\\app\\bin',
      'C:\\Program Files\\nodejs\\',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WindowsApps',
      'C:\\Users\\EHAB\\AppData\\Roaming\\npm',
      'C:\\Users\\EHAB\\AppData\\Local\\Programs\\Antigravity\\bin',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-8.1-full_build\\bin',
      [length]: 15
    ]
  }
} %o
2026-05-25T10:35:16.866Z [filesystem] [info] Server started and connected successfully { metadata: undefined }
2026-05-25T10:35:16.955Z [filesystem] [info] Message from client: {"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{"extensions":{"io.modelcontextprotocol/ui":{"mimeTypes":["text/html;profile=mcp-app"]}}},"clientInfo":{"name":"claude-ai","version":"0.1.0"}},"jsonrpc":"2.0","id":0} { metadata: undefined }
2026-05-25T10:35:17.034Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-05-25T10:35:17.034Z [filesystem] [info] Server transport closed (renderer released port) { metadata: undefined }
2026-05-25T10:35:17.172Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-05-25T10:35:17.172Z [filesystem] [info] Shutting down server... { metadata: undefined }
2026-05-25T10:35:17.172Z [filesystem] [info] Initializing server... { metadata: undefined }
2026-05-25T10:35:17.174Z [filesystem] [info] Using MCP server command: C:\WINDOWS\System32\cmd.exe with args and path: {
  metadata: {
    args: [
      '/C',
      'C:\\Program Files\\nodejs\\npx.cmd',
      '-y',
      '@modelcontextprotocol/server-filesystem',
      'C:\\Users\\EHAB\\Desktop',
      'C:\\Users\\EHAB\\Documents\\projects',
      [length]: 6
    ],
    paths: [
      'C:\\Program Files\\nodejs',
      'C:\\Program Files\\Git\\cmd',
      'C:\\Program Files\\Git\\mingw64\\bin',
      'C:\\Program Files (x86)\\Common Files\\Intel\\Shared Libraries\\redist\\intel64\\compiler',
      'C:\\WINDOWS\\system32',
      'C:\\WINDOWS',
      'C:\\WINDOWS\\System32\\Wbem',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
      'C:\\WINDOWS\\System32\\OpenSSH\\',
      'C:\\Program Files\\cursor\\resources\\app\\bin',
      'C:\\Program Files\\nodejs\\',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WindowsApps',
      'C:\\Users\\EHAB\\AppData\\Roaming\\npm',
      'C:\\Users\\EHAB\\AppData\\Local\\Programs\\Antigravity\\bin',
      'C:\\Users\\EHAB\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-8.1-full_build\\bin',
      [length]: 15
    ]
  }
} %o
2026-05-25T10:35:17.177Z [filesystem] [info] Server started and connected successfully { metadata: undefined }
2026-05-25T10:35:17.244Z [filesystem] [info] Message from client: {"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{"extensions":{"io.modelcontextprotocol/ui":{"mimeTypes":["text/html;profile=mcp-app"]}}},"clientInfo":{"name":"claude-ai","version":"0.1.0"}},"jsonrpc":"2.0","id":0} { metadata: undefined }
Error accessing directory C:\Users\EHAB\Desktop: Error: ENOENT: no such file or directory, stat 'C:\Users\EHAB\Desktop'
    at async Object.stat (node:internal/fs/promises:1040:18)
    at async file:///C:/Users/EHAB/AppData/Local/npm-cache/_npx/a3241bba59c344f5/node_modules/@modelcontextprotocol/server-filesystem/dist/index.js:43:23
    at async Promise.all (index 0)
    at async file:///C:/Users/EHAB/AppData/Local/npm-cache/_npx/a3241bba59c344f5/node_modules/@modelcontextprotocol/server-filesystem/dist/index.js:41:1 {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'stat',
  path: 'C:\\Users\\EHAB\\Desktop'
}
2026-05-25T10:35:19.410Z [filesystem] [info] Server transport closed { metadata: undefined }
2026-05-25T10:35:19.410Z [filesystem] [info] Server transport closed unexpectedly, this is likely due to the process exiting early. If you are developing this MCP server you can add output to stderr (i.e. `console.error('...')` in JavaScript, `print('...', file=sys.stderr)` in python) and it will appear in this log. { metadata: undefined }
2026-05-25T10:35:19.411Z [filesystem] [error] Server disconnected. For troubleshooting guidance, please visit our [debugging documentation](https://modelcontextprotocol.io/docs/tools/debugging) { metadata: { context: 'connection', stack: undefined } }
2026-05-25T10:35:19.411Z [filesystem] [info] Client transport closed { metadata: undefined }
2026-05-25T10:35:19.411Z [filesystem] [info] Client transport closed { metadata: undefined }
Error accessing directory C:\Users\EHAB\Desktop: Error: ENOENT: no such file or directory, stat 'C:\Users\EHAB\Desktop'
    at async Object.stat (node:internal/fs/promises:1040:18)
    at async file:///C:/Users/EHAB/AppData/Local/npm-cache/_npx/a3241bba59c344f5/node_modules/@modelcontextprotocol/server-filesystem/dist/index.js:43:23
    at async Promise.all (index 0)
    at async file:///C:/Users/EHAB/AppData/Local/npm-cache/_npx/a3241bba59c344f5/node_modules/@modelcontextprotocol/server-filesystem/dist/index.js:41:1 {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'stat',
  path: 'C:\\Users\\EHAB\\Desktop'
}
2026-05-25T10:35:19.601Z [filesystem] [info] Server transport closed { metadata: undefined }
2026-05-25T10:35:19.601Z [filesystem] [info] Client transport closed { metadata: undefined }
