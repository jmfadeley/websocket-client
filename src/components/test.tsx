import React from 'react';

interface TestProps {
    word: string;
}

class Test extends React.Component<TestProps, {}> {
    render() {
        return (
            <div key={this.props.word}>
                {this.props.word}
            </div>
        );
    }
}

export default Test;
