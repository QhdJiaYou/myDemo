import * as React from 'react';
interface myState {
    name: string;
    age: number;
}
class Template extends React.Component<any, myState> {
    state = {
        name : 'qhd',
        age: 24,
    }
   constructor(props: any) {
       super(props);
       console.log('这里是constructor');
   }

   static getDerivedStateFromProps(nextProps: any, prevState: myState) {
        console.log('这里是getDerivedStateFromProps');
        return {
            name: 'qhd',
            age: 67,
        }
   }

   render() {
       const { name, age } = this.state;
       return <div>{name}he{age}</div>
   }

   componentDidMount() {
       console.log('这里是componentDidMount');
       this.setState({
           name: 'huj',
           age: 45,
       });
   }

   shouldComponentUpdate(nextProps: any, nextState: myState) {
    console.log('这里是scu');
    return true;
   }

   getSnapshotBeforeUpdate(prevProps: any, prevState: myState): any {
    console.log('这里是getSnapshotBeforeUpdate');
    return null;
   }

   componentDidUpdate(prevProps: any, prevState: myState, snapshot: any) {
       console.log('这里是componentDidUpdate',snapshot);
   }

   componentWillUnmount() {
       console.log('这里是componentWillUnmount');
   }
}

export default Template;