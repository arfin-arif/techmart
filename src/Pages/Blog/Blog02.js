import React from 'react';

const Blog02 = () => {
    return (
        <div className='max-w-6xl mx-auto mt-10 mb-5'>
            <h1 className='text-3xl font-extrabold mb-5'>How does prototypical inheritance work?</h1>
            <p className='text-xl'>
                In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is called the prototype. In short, objects can inherit properties from other objects — the prototypes.

                You’re probably wondering: why the need for inheritance in the first place? Well, inheritance solves the problem of data and logic duplication. By inheriting, objects can share properties and methods without the need of manually setting those properties and methods on each object.

                How to Access a Prototype’s Properties and Methods in JavaScript
                When we try to access a property of an object, the property is not only searched in the object itself. It's also searched in the prototype of the object, in the prototype of the prototype, and so on – until a property is found that matches the name or the end of the prototype chain is reached.

                If the property or method isn’t found anywhere in the prototype chain, only then will JavaScript return undefined.

                Every object in JavaScript has an internal property called [[Prototype]].

            </p>
        </div>
    );
};

export default Blog02;