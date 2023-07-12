import { h, Component } from "preact";

const AsyncComponent = (importComponent) => {
  return class extends Component {
    state = {
      component: null,
    };

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({ component });
    }

    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : null;
    }
  };
};

export default AsyncComponent;
