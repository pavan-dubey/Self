import React, { useState } from 'react';

const Accordion = () => {
    // State to track which item is expanded
    const [expanded, setExpanded] = useState(null);

    const data = [
        {
            id: '0',
            Item: 'Product One',
            ItemDesc: 'Description of Product One: This is a great product for...',
        },
        {
            id: '1',
            Item: 'Product Two',
            ItemDesc: 'Description of Product Two: This product is designed for...',
        },
        {
            id: '2',
            Item: 'Product Three',
            ItemDesc: 'Description of Product Three: Perfect for those who need...',
        },
    ];

    // Handle click to toggle the visibility of the description
    const handleToggle = (id) => {
        if (expanded === id) {
            setExpanded(null); // Close if the same item is clicked
        } else {
            setExpanded(id); // Open the clicked item
        }
    };

    return (
        <div>
            <div>Accordion</div>

            <div style={{ backgroundColor: 'lightgray', width: '400px', margin: '20px' }}>
                {data.map((item) => (
                    <div key={item.id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                            }}
                            onClick={() => handleToggle(item.id)}
                        >
                            <span>{item.Item}</span>
                            <span>{expanded === item.id ? '−' : '+'}</span>
                        </div>

                        {expanded === item.id && (
                            <div style={{ paddingTop: '10px', paddingLeft: '10px' }}>
                                <p>{item.ItemDesc}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
