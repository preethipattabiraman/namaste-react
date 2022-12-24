# Cross origin request sharing (CORS) is a mechanism that allows a server from a given domain to request for resources from some other domain.
# It is like a permission given to the browser.
# Generally, when a page is loaded in a browser, it enforces the Same-Origin policy: only resources from the same domain can be loaded. But, in some cases, external resources may be needed. CORS gives permissions to do this.
# Without CORS, different subdomains, ports, protocols too are not allowed.
# Assume origin1 and origin2. Initially there is a preflight call to the origin2 asking for permission. origin2 sends appropriate response that will allow the browser to do the relevant operation.
# OPTIONS header from origin1 - access-control-request-method, access-control-request-header, origin
# Additional headers from origin2 - access-control-allow-origin, access-control-allow-methods
# CORS helps in making web secure.
