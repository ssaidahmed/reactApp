import React, {Component} from 'react';

class About extends Component {
    render(){
        return(
            <div className="main">
                <h1>Notice the use of %PUBLIC_URL% in the tag above.
                    It will be replaced with the URL of the `public` folder during the build.
                    Only files inside the `public` folder can be referenced from the HTML.

                    Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
                    work correctly both with client-side routing and a non-root public URL.
                    Learn how to configure a non-root public URL by running `npm run build`.
                </h1>
            </div>
            );
    }
}

export default About;