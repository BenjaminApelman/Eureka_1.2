import 'prismjs/themes/prism-okaidia.css';
import Prism from 'prismjs'; // Import Prism.js (optional)

export default function InputOutput({ text, language }) {
    // Optionally, you can call Prism.highlightAll() here for automatic highlighting
    // Prism.highlightAll();

    return (
        <div className="gray-box">
            <pre className={`language-${language}`}>
                <code class={`language-${language}`}>
                    {text}
                </code>
            </pre>
        </div>
    );
}
