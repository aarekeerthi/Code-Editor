import { useState ,useEffect} from 'react';
import Editor from './components/Editor';
import useLocalStorage from './hooks/useLocalStorage';
function App() {
    const [html, setHtml] = useLocalStorage('html','');
    const [css, setCss] = useLocalStorage('css','');
    const [js, setJs] = useLocalStorage('js','');
    const [srcDoc,setSrcDoc]=useState('');
    useEffect(()=>{
        const timeout=setTimeout(()=>{
            setSrcDoc(
            `<html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
            </html>`
            )
        },250)
        return ()=>clearTimeout(timeout)
    },[html,css,js])

    return (
        <>
            <div className="pane ">
                <Editor
                    key="code-html"
                    language="xml"
                    displayName="HTML"
                    value={html}
                    onChange={setHtml}
                />
                <Editor
                    key="code-css"
                    language="css"
                    displayName="CSS"
                    value={css}
                    onChange={setCss}
                />
                <Editor
                    key="code-js"
                    language="javascript"
                    displayName="JAVASCRIPT"
                    value={js}
                    onChange={setJs}
                />
                <iframe
                className='iframe'
                srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                />
            </div>
        </>
    );
}

export default App;
