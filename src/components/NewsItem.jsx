import React from "react";

export const NewsItem = ({ title, body}) => (
    <>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
);