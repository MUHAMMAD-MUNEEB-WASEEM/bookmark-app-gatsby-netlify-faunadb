import React from 'react';

export function Card({ url, title }) {
    return <div className="card">
        <p className="url"><b>{url}</b></p>
        <p className="title">{title}</p>
    </div>
}