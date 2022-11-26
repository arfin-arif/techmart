import React from 'react';

const Blog03 = () => {
    return (
        <div className='max-w-6xl mx-auto mt-10 mb-5'>
            <h1 className='text-3xl font-extrabold mb-5'> What is a unit test? Why should we write unit tests?</h1>
            <h4 className="text 2xl font-bold"> What is a Unit Test?</h4>
            <p className='text-xl'>


                A unit test verifies the behavior of a unit of software in the system. It verifies whether a small and isolated piece of the codebase called “unit” behaves as the developer intended.

                Unit tests verify the smallest parts or components of an application by comparing their actual behavior with the expected behavior in complete isolation. Here, “complete isolation” means that, during unit testing, devs do not connect the application with external dependencies such as databases, the filesystem, or HTTP services. This allows unit tests to be fast and stable since they won’t fail due to problems integrating with those external services.

            </p>

            <h4 className="text 2xl font-bold mt-4 ">       Why Write Unit Tests?</h4>

            <p className="text-xl">
                Usually, developers write unit tests first, then write the software code. This approach is known as test-driven development (TDD). In TDD, the requirements are turned into specific test cases, then the software is improved to pass the new tests. In the case of unit tests, it allows for the modification of code without affecting the functionality of other units or the software in its entirety. This makes the job easier for developers as the bugs are easy to locate at this stage, which saves time and money.

                Also, within unit test environments, the individual modules of a product become isolated from one another and have their own area of responsibility. In this scenario, tests are more reliable because they are run in a contained environment. The code too, because of said reliability, becomes reliable.

                Along with the above facts, let’s explore the various benefits of unit tests.

                Benefits of Unit Tests:

                Unit tests help to find and fix bugs quickly and easily.
                Unit tests contribute to higher code quality.
                Unit tests contribute to better application architecture.
                Unit tests act as documentation.
                The main advantage of unit tests is their laser-sharp focus. Since they test a single function, they give precise feedback. If a unit test fails, then in the vast majority of cases testers can be sure that the specific function being tested is the problem.
            </p>

        </div>
    );
};

export default Blog03;