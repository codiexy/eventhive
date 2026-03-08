import React from "react";

interface SEOProps {
    schema?: object;
}

export default function SEO({ schema }: SEOProps) {
    if (!schema) return null;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
