1. ComponentDidUnmount is called when a component is umounted from the DOM or destroyed. 
2. This is called to clear out timers or any network requests that was added as a part of componentDidMount()
3. If any setState() is called here, it will not be rendered in the DOM because component will never be rendered again. Avoid calling setState here.
4. For example, if displaying some promotions every 5 minutes or anything if a promotion modal is displayed and if the user navigates to some other page and this promotion needs to be stopped, clear this timer in the componentDidUnmount().

    class Sample extends React.Component {
        render() {
            //Some rendering JSX
        }

        componentDidMount() {
            this.timer = setInterval();
        }

        componentDidUnmount() {
            clearInterval(this.timer);
        }
    }