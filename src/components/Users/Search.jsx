import React, { useState,  useContext } from 'react'
import GithubContext from '../../Context/Github/GithubContext';
import AlertContext from '../../Context/Alert/AlertContext';


const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === ''){
            alertContext.setAlert('Please enter something', 'light')
        } else {
            githubContext.searchUsers(text);
            setText('')
        }
    }

    const onChange = (e) => setText(e.target.value);
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text"
                    name='text'
                    placeholder='Search User...'
                    value={text}
                    onChange={onChange}/>
                <input type="submit" value='Search' className='btn btn-dark btn-block' />
            </form>
            {githubContext.users.length >0 ? <button className="btn btn-light btn-block"
            onClick={githubContext.clearUsers}>
                Clear
            </button> : null }
            
        </div>
    );
};

export default Search;
