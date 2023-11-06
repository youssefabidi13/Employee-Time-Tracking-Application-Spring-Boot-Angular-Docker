# Employee Time Tracking Application

This project is aimed at developing a web application that enables employees to track their working hours. The application allows employees to enter the start and end of their workday, as well as any breaks they took. Additionally, the application generates a weekly report of each employee's working hours. Furthermore, employees can submit their mood at the end of the day, with submissions being completely anonymous to the system. An employee can only submit their mood once a day, and an email will be sent to the employee before 6 p.m. from Monday to Friday, allowing them to access a page and submit their mood.

## Technologies Used

The application has been developed using the following technologies:

- Spring Boot
- Angular
- JWT

## Project Steps

The project was developed in the following steps:

### Development of the User Interface

The user interface allows employees to enter the following information:

- Date
- Start time
- End time
- Breaks

### Development of the Database

The database contains the following tables:

- Employees
- Work Times

The Employees table contains the following information about the employees:

- ID
- Name
- Surname
- Email
- Password

The Work Times table contains the following information about the employees' work times:

- ID
- Employee ID
- Date
- Start time
- End time
- Breaks

### Development of the Cron Job

The cron job is used to generate the weekly report of each employee's working hours. The report includes the following information:

- Employee ID
- Employee Name
- Employee Surname
- Worked hours
- Overtime hours

### Docker Hosting

The application can be hosted on a web server or in a Docker container. Docker is a technology that enables the creation of software containers. A container is a self-contained execution unit that contains everything an application needs to run, including code, libraries, configurations, and dependencies. Using Docker for application hosting simplifies deployment and maintenance.

## Installation

To run the application, follow these steps:

1. Install Docker on your system.
2. Pull the Docker image from the repository.
3. Run the Docker container with the required environment variables and configurations.

For more detailed instructions, refer to the documentation provided in the repository.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvement, please create a pull request or open an issue in the repository.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
