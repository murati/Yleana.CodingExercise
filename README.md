# Yleana.CodingExercise
## The Goal
Create a React app with Redux and fetch data from Web API. 

## Specifics
- The Project should be done in .NET core 2.1.
- Client side must be done in React 16 & Redux.
- React Router 4 must be used.

## The Data
This is the hard coded data we'll use. (you can copy paste it from here. It's a valid JSON)

```javascript
{
    "Job": [
        {
            "Id": 1
            "Title": "Actress",
            "Employees": [
                {
                    "Id": 1,
                    "Name": "Isabelle Huppert",
                    "City": "Paris",
                    "Country": "France"
                },
                {
                    "Id": 2,
                    "Name": "Greta Gervig",
                    "City": "New York",
                    "Country": "USA"
                },
                {
                    "Id": 3,
                    "Name": "Diane Kruger",
                    "City": "Berlin",
                    "Country": "Germany"
                }
            ]
        },
        {
            "Id": 2
            "Title": "Director",
            "Employees": [
                {
                    "Id": 1,
                    "Name": "Stanley Kubrick",
                    "City": "New York",
                    "Country": "USA"
                },
                {
                    "Id": 2,
                    "Name": "Ingmar Bergman",
                    "City": "Stockholm",
                    "Country": "Sweden"
                },
                {
                    "Id": 3,
                    "Name": "Michael Haneke",
                    "City": "Salzburg",
                    "Country": "Austria"
                },
                {
                    "Id": 4,
                    "Name": "Jean-luc Goddard",
                    "City": "Paris",
                    "Country": "France"
                }
            ]
        }
    }
}  
```

## Goals
### Make a page for Job Titles
- When an unauthorized user lands on this page, page makes a GET call to fetch all the job titles and returns just the titles (The fetch call should return only job titles not anything else) from your WebAPI endpoint.
- When the data is returned it gets saved into redux store and react component(s) gets rendered.
- This page URL should be localhost:[PORT]/titles

### Make a page display the employees' names.

- When an unauthorized user lands on this page, page makes a GET call to fetch all the name of the employees from your WebAPI endpoint (The fetch call should return only employee names not anything else).
- When the data is returned it gets saved into redux store and react component(s) gets rendered.
- This page URL should be localhost:[PORT]/employees/:jobId 
- JobId is a parameter - so if the job id is 2, it should return the directors' name; if 1 it should return actresses' name.

### Routing
- Every page should have Navigation Links.
- React router must be used.
    - Titles page:
        - Navlink 1: Get actresses. Navigates to localhost:[PORT]/employees/1
        - Navlink 2: Get directors. Navigates to localhost:[PORT]/employees/2
    - Actresses page:
        - Navlink 1: Get Job Titles. Navigates to localhost:[PORT]/titles
        - Navlink 2: Get directors. Navigates to localhost:[PORT]/employees/2
    - Directors page:
        - Navlink 1: Get Job Titles. Navigates to localhost:[PORT]/titles
        - Navlink 2: Get actresses. Navigates to localhost:[PORT]/employees/1    

### Scalability and Maintainability
- Your WebAPI should not directly return the data, method from your repository class should.
- Use IoC Containers for your repository classes.
- Use Dependency Injection when you initiate a controller class that depends on repository class (repository class should be injected).
- Cache app settings on application start and bind them strongly type objects (appsettings.json). Reach these settings using DI.

### Initial Instructions/Guidance
- Create a GitHub Account if you don't have one.
- I would suggest to use a GUI for Git like Sourcetree.
- Fork this repo.
- Clone and Code!
- When finished, push to your Github fork (you can do this as much as you would like to).
- Perform a pull request.

Have fun and please let me know if you have questions :)
