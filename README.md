# Application Setup Guide

## Requirements

Before you start, make sure you have the following installed:
- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0): Needed to run the backend services.
- [Node.js](https://nodejs.org/en/): Required for npm, which is necessary to run Angular projects.
- [Angular CLI](https://angular.io/cli) version 17: Needed to create, develop, build, and deploy Angular applications.
- [Visual Studio](https://visualstudio.microsoft.com/) (preferably) or another compatible IDE for .NET development.
- [Visual Studio Code](https://code.visualstudio.com/) (recommended) or another compatible IDE for Angular development.

## Running the Application

### Backend Setup (.NET)

1. **Open the Solution**: Open your `.sln` file in Visual Studio.
2. **Restore Packages**: Make sure all NuGet packages are restored. You can do this by right-clicking on the solution in Solution Explorer and selecting "Restore NuGet Packages".
3. **Set Startup Project**: Right-click on the .NET project and set it as the startup project.
4. **Build the Project**: Build the project by pressing `Ctrl + Shift + B` or by clicking on "Build" in the top menu and selecting "Build Solution".
5. **Run the Application**: Start the application by pressing `F5` or clicking on the "Start" button in the toolbar. Ensure your application's API is running typically at `http://localhost:5178`.

### Frontend Setup (Angular)

1. **Open the Project**: Navigate to your Angular project folder in the command line or open it in Visual Studio Code.
2. **Install Dependencies**:
    ```bash
    npm install
    ```
3. **Serve the Application**:
    ```bash
    ng serve
    ```
   This command will compile the application and serve it typically at `http://localhost:4200`.
4. **Access the Application**: Open a web browser and go to `http://localhost:4200` to view the application.

## Additional Notes

- Ensure the API URL in the Angular environment file matches the URL where the .NET backend is running.
- For production environments, additional configuration for build paths, server settings, and optimizations may be necessary.
