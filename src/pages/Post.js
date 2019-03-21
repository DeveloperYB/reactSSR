import React from 'react';
import Comment from 'components/Comment';
import withRequest from 'components/hoc/withRequest';

const Post = props => {
    const { match, data } = props;
    return (
        <div>
            <div>포스트 {match.params.id}</div>
            {data ? (
                <>
                    <div>userId : {data.userId}</div>
                    <div>id : {data.id}</div>
                    <div>title : {data.title}</div>
                    <div>body : {data.body}</div>
                </>
            ) : (
                <>로딩중..</>
            )}
            <div>코맨트</div>
            <Comment match={match} />
        </div>
    );
};
//https://jsonplaceholder.typicode.com/posts/1
export default withRequest('https://jsonplaceholder.typicode.com/posts/')(Post);
