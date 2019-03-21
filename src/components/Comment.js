import React from 'react';
import withRequest from 'components/hoc/withRequest';

const Comment = props => {
    const { data } = props;
    return (
        <div>
            {data ? (
                <>
                    {data.length ? (
                        <div>
                            {data.map((v, i) => {
                                const { body, email, id, name, postId } = v;
                                return (
                                    <div
                                        key={`${id}_${postId}`}
                                        style={{
                                            border: '1px solid black',
                                            padding: '5px',
                                            margin: '10px'
                                        }}
                                    >
                                        <div>이름 : {name}</div>
                                        <div>메일주소 : {email}</div>
                                        <div>내용 : {body}</div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        '댓글이 없습니다.'
                    )}
                </>
            ) : (
                '로딩중...'
            )}
        </div>
    );
};
//https://jsonplaceholder.typicode.com/comments?postId=${postId}
export default withRequest('https://jsonplaceholder.typicode.com/comments?postId=')(Comment);
