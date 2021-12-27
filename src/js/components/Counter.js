export default function (Alpine) {
  Alpine.data("counter", function () {
    return {
      currentValue: 0,

      init() {
        let el = this.$el;

        if (el.hasAttribute("data-start-value")) {
          this.currentValue = parseInt(el.getAttribute("data-start-value"));
        }
      },

      increment() {
        this.currentValue++;
      },

      decrement() {
        this.currentValue--;
      },

      remaining() {
        return 100 - this.currentValue;
      }
    };
  });
}
