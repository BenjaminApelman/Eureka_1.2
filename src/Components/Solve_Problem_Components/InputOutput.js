import 'prismjs/themes/prism-okaidia.css';

export default function InputOutput({ text, language }) {
    
    //This is to avoid a undefined error which has happend but I dont understant what causes it
    // if (!text) {
    //     return <div className="gray-box">No code provided.</div>;
    // }

   if (typeof text === 'object' && text !== null) {
        // Render values of the object as a single line with square brackets
        const renderObject = () => {
            const values = Object.values(text);
            return `[${values.join(', ')}]`;
        };

        return (
            <div className="gray-box">
                <pre className={`language-${language}`}>
                    <code className={`language-${language}`}>
                        {renderObject()}
                    </code>
                </pre>
            </div>
        );
    }


    return (
        <div className="gray-box">
            <pre className={`language-${language}`}>
                <code className={`language-${language}`}>
                    {text}
                </code>
            </pre>
        </div>
    );
}
