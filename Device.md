```js
export default {
    computed: {
        device() {
            const { $device } = this;
            let returnValue = null;
            switch ($device.type) {
                case 'xs':
                    returnValue = 'X-Small';
                    break;
                case 'sm':
                    returnValue = 'Small';
                    break;
                case 'md':
                    returnValue = 'Mid';
                    break;
                case 'lg':
                    returnValue = 'Large';
                    break;
                case 'xl':
                    returnValue = 'X-Large';
                    break;
            }
            return returnValue
        },
    }
}
```