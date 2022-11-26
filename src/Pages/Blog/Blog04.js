import React from 'react';

const Blog04 = () => {
    return (
        <div className='max-w-6xl mx-auto mt-10 mb-5'>
            <h1 className='text-3xl font-extrabold mb-5'>React vs. Angular vs. Vue?</h1>
            <h4 className="text 2xl font-bold mt-4 ">
                React</h4>
            <p className='text-xl'>
                React is one of the most popular JavaScript projects with 160k stars on GitHub. It’s developed and maintained by Facebook, and it’s used internally in many of their projects. Additionally, it powers over 2 million websites, according to BuiltWith‘s usage statistics.
                <br />
                React, interestingly, combines the UI and behavior of components. For instance, here is the code to create a hello world component in React. In React, the same part of the code is responsible for creating a UI element and dictating its behavior.
            </p>

            <h4 className="text 2xl font-bold mt-4 ">
                Angular
            </h4>
            <p className='text-xl'>
                Angular is developed by Google, but surprisingly it’s not used in some of their flagship products such as Search or Youtube. It’s often used in enterprise projects, and it powers over 97,000 websites based on BuiltWith‘s data.
                <br />
                It’s the least starred among the three frameworks, with 68k stars on GitHub. However, when switching from Angular 1 to Angular 2, they created an entirely new repository instead of continuing the AngularJS project, which also has 59k stars.
            </p>
            <h4 className="text 2xl font-bold mt-4 ">
                Vue
            </h4>
            <p className='text-xl'>

                Out of the three frameworks, Vue has the most stars on GitHub, with 176k stars. The project is developed and led by ex-Googler Evan You. It’s a very strong, independent project in the open-source community and is used by over 1 million websites, according to BuiltWith.
                <br />
                When looking into Vue vs React, in Vue, UI and behavior are also a part of components, which makes things more intuitive. Also, Vue is highly customizable, which allows you to combine the UI and behavior of components from within a script. Further, you can also use pre-processors in Vue rather than CSS, which is a great functionality. Vue is great when it comes to integration with other libraries, like Bootstrap.
            </p>


        </div>
    );
};

export default Blog04;