import React, {PropTypes} from 'react'

export default class FormBuilderProvider extends React.Component {
  static propTypes = {
    resolveInputComponent: PropTypes.func.isRequired,
    resolveFieldComponent: PropTypes.func.isRequired,
    resolvePreviewComponent: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    schema: PropTypes.object.isRequired
  };

  static defaultProps = {
    children: null
  };

  static childContextTypes = {
    resolveFieldComponent: PropTypes.func.isRequired,
    resolveInputComponent: PropTypes.func.isRequired,
    resolvePreviewComponent: PropTypes.func.isRequired,
    schema: PropTypes.object
  };

  getChildContext() {
    return {
      schema: this.props.schema,
      resolveInputComponent: this.props.resolveInputComponent,
      resolvePreviewComponent: this.props.resolvePreviewComponent,
      resolveFieldComponent: this.props.resolveFieldComponent
    }
  }

  render() {
    return this.props.children
  }
}
