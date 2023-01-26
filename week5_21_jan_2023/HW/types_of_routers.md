### BrowserRouter
1. Stores the current location in the browser address bar using clean URLs 
2. Navigates between pages using the browser's in-built history stack 

### HashRouter
1. Used in cases when the browser address should not or cannot be sent the server
2. This can happen in a shared hosting situation - when there is no full control over the server
3. Stores the current location in the hash part of the current URL - hence not sent to the server
4. Not recommended to use until it is absolutely needed

### MemoryRouter
1. Stores the locations internally like an array
2. Has full control over the navigation; unlike BrowserRouter and HashRouter - which is dependent on the browser's history stack
3. Used primarily for testing 

### NativeRouter
1. This is driven from the MemoryRouter; uses array just like MemoryRouter to store the locations
2. Used primarily in ReactNative applications

### Router
1. Low-level interface which is implemented by all the routers
2. No need to use this in the application - user the relevant/necessary implementations
3. Provides the context for the router used
4. Can provide a special basename using which the application can be rendered/part of the application is to be rendered/application has multiple entry points

### StaticRouter
1. Render a react router application in node
2. Current location can be accessed by the location attribute