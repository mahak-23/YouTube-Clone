# YouTube Clone [LIVE](https://videos-posts-api.netlify.app/)

This application  allow users to:

1.  View a list of predefined video thumbnails.
2. Click on a thumbnail to play the video.
3. See basic information about the video such as the creator, title and description.


It has used the videos API in a paginated manner. 
(Read this to know more about API pagination - https://nordicapis.com/everything-you-need-to-know-about-api-pagination/) 

For fetching videos use the below-mentioned API

curl --location --request GET 'https://internship-service.onrender.com/videos?page=2'

`page` starts with 0 and it calls the API with incremented values for Pagination.

## Installation

Follow these steps to install and run the project:

1. Clone the repository:    
    git clone https://github.com/your-username/your-project.git
    
2. Navigate to the project directory: 
      cd your-project

3. Install the dependencies:
      npm install
      
4. Start the development server:
      npm start
 
5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the project.







