import * as React from 'react';

function HighComponent(Mycomponent: any) {
    return function EnhancedComponent(props: any) {
        if (props.condition) {
            return <Mycomponent value={props.value} size={12}/>;
        }
        return <Mycomponent />;
    }
}

export default HighComponent;