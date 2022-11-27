import React, { useEffect, useState } from 'react';

const useBuyer = email => {
    const [isUser, setIsSeller] = useState(false);
    const [isIUserLoading, setIsUserLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/buyers/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isUser)
                    setIsUserLoading(false)
                })
        }
    }, [email])
    return [isUser, isIUserLoading];
};

export default useBuyer;