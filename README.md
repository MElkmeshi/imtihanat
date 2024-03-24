# imtihanat

**imtihanat** is a GitHub repository that provides an API for a messenger bot to scrape the official Libyan website for 12th-grade school grades. It uses Puppeteer, a Node.js library, to perform web scraping and retrieve the grades based on a given seat number. The API returns a screenshot of the grades as the output.

## Example
<img width="470" alt="359237705_973929690478299_4780344238801903803_n_276784498293052" src="https://github.com/MElkmeshi/imtihanat/assets/95718825/dd9861be-b7a5-4e09-9783-8fce62359a7f">

## Prerequisites

Before running the API, make sure you have the following software installed:

- Node.js (v12 or above)
- npm (Node Package Manager)

## Installation

1. Clone the repository to your local machine using the following command:

   ```shell
   git clone https://github.com/<your-username>/imtihanat.git
   ```

2. Navigate to the project directory:

   ```shell
   cd imtihanat
   ```

3. Install the required dependencies:

   ```shell
   npm install
   ```

## Usage

1. Start the server by running the following command:

   ```shell
   npm start
   ```

   This will start the Express server and make the API available at `http://localhost:3000`.

2. To retrieve the grades, send a GET request to the following endpoint:

   ```
   GET /result/<seat-number>
   ```

   Replace `<seat-number>` with the actual seat number for which you want to fetch the grades.

   Example request:

   ```
   GET /result/seat=212341
   ```

   The API will respond with a screenshot of the grades as a static image file.

## API Response

The API will respond with the following HTTP status codes and response formats:

- Success (HTTP 200):
  - Content-Type: `application/json`
  - Body: JSON Object with an `image-link` property containing the image link
- Server Error (HTTP 500):
  - Content-Type: `application/json`
  - Body: JSON object with an `error` property containing the error message

## Contributing

Contributions to the **imtihanat** project are welcome! If you encounter any issues or have suggestions for improvements, please create a new issue in the GitHub repository. Additionally, feel free to submit pull requests with bug fixes or new features.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and distribute the code as per the terms of the license.

## Acknowledgments

The **imtihanat** project makes use of the following open-source libraries:

- [Puppeteer](https://github.com/puppeteer/puppeteer) - A Node.js library for controlling headless Chrome or Chromium browsers.
- [Express](https://github.com/expressjs/express) - A fast, unopinionated, minimalist web framework for Node.js.

Special thanks to the developers of these libraries for their valuable contributions.

## Disclaimer

Please note that

 **imtihanat** is an independent project and is not affiliated with or endorsed by the official Libyan website for 12th-grade school grades or any other related entities. The project aims to provide a convenient API for accessing and retrieving grades from the website, but the accuracy and reliability of the data obtained are not guaranteed. Use the API responsibly and adhere to the terms of service of the target website.

Always ensure that you have appropriate permissions and authorization to access and retrieve data from the website. Respect the privacy and security of individuals' information and use the API strictly for educational or personal purposes.
