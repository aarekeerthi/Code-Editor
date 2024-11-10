import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/javascript/javascript.js';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import PropTypes from 'prop-types';

function Editor(props) {
    const { language, displayName, value, onChange } = props;


    function handleChange(editor, data, value) {
        onChange(value);
    }
    
    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">{displayName}</div>
            <ControlledEditor
                onBeforeChange={(editor, data, value) => handleChange(editor, data, value)}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineNumbers:true,
                    lineWrapping: true,
                    mode: language,
                    lint: true,
                    theme: 'material'
                }}
            />
        </div>
    );
}

Editor.propTypes = {
    language: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Editor;
