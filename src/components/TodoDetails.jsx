import React from 'react';

const TodoDetails = ({match}) => {
    return (
        <div>Details de {match.params.id}</div>
    );
}

export default TodoDetails;