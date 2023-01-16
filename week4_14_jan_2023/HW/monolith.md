1. A single application - that handles everything that the application is going to do - from UI, DB connections, notifications, authentication etc is developed and deployed as a single WAR file. This architectural approach is called monolith architecture.
2. It is easy to develop, test, deploy and scale a monolith application.
3. It has its own pitfalls:
    - But it easily intimidates any new developer; they may take more time to understand the application to begin a new development.
    - A small UI change too may need the complete WAR deployment.
    - Since everything is loaded in the same project in the same IDE, opening and working on the application is cumbersome and slow.
    - Upgrading is difficult. The tech stack migration is virtually impossible due to the tightly coupled nature of the modules.
