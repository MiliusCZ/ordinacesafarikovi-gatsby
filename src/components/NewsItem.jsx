import React from "react";

export const NewsItem = ({ title, body}) => (
    <>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
);