$(document).ready(function () {
  /***** Form *****/
  let input = $("input[type=tel][intlTelInput]");
  if (input.length > 0) {
    for (let i = 0; i < input.length; i++) {
      intlTelInput(input[i], {
        utilsScript: "/js/utils.js",
        autoPlaceholder: "aggressive",
        separateDialCode: true,
        initialCountry: "sa",
        preferredCountries: ["sa", "kw", "ae", "bh", "om", "qa"],
      });
    }
  }
  $(".password-toggle").on("click", function (e) {
    e.preventDefault();
    const input = $(this)
      .closest(".password-content")
      .find("input.form-control");
    const isPassword = input.attr("type") === "password";
    input.attr("type", isPassword ? "text" : "password");
    $(this).toggleClass("active", isPassword);
  });

  if (typeof $.fn.select2 !== "undefined") {
    if ($(window).width() >= 992) {
      $("select[select2]").select2({
        customClass: "error" ,
        minimumResultsForSearch: Infinity,
      });
    }
  }
  /***** OTP *****/
  const inputs = $("#otp-input input");

  inputs.on("input", function () {
    const index = inputs.index(this);

    if (this.value.length == 1 && index + 1 < inputs.length) {
      $(inputs[index + 1]).removeAttr("disabled");
      inputs[index + 1].focus();
    } else {
      inputs.blur();
      $("form .submit-btn").removeAttr("disabled");
    }

    if (this.value.length > 1) {
      if (isNaN(this.value)) {
        this.value = "";
        updateInput();
        return;
      }

      const chars = this.value.split("");

      $.each(chars, function (pos) {
        if (pos + index >= inputs.length) return false;

        let targetInput = inputs[pos + index];
        targetInput.value = chars[pos];
      });

      let focusIndex = Math.min(inputs.length - 1, index + chars.length);
      inputs[focusIndex].focus();
    }
    updateInput();
  });

  inputs.on("keydown", function (e) {
    const index = inputs.index(this);

    if (e.keyCode == 8 && this.value == "" && index != 0) {
      for (let pos = index; pos < inputs.length - 1; pos++) {
        inputs[pos].value = inputs[pos + 1].value;
      }

      inputs[index - 1].value = "";
      inputs[index - 1].focus();
      updateInput();
      return;
    }

    if (e.keyCode == 46 && index != inputs.length - 1) {
      for (let pos = index; pos < inputs.length - 1; pos++) {
        inputs[pos].value = inputs[pos + 1].value;
      }

      inputs[inputs.length - 1].value = "";
      this.select();
      e.preventDefault();
      updateInput();
      return;
    }

    if (e.keyCode == 37) {
      if (index > 0) {
        e.preventDefault();
        inputs[index - 1].focus();
        inputs[index - 1].select();
      }
      return;
    }

    if (e.keyCode == 39) {
      if (index + 1 < inputs.length) {
        e.preventDefault();
        inputs[index + 1].focus();
        inputs[index + 1].select();
      }
      return;
    }
  });

  function updateInput() {
    let inputValue = inputs.toArray().reduce(function (otp, input) {
      otp += input.value.length ? input.value : " ";
      return otp;
    }, "");
    $("input[name=otp]").val(inputValue);
  }
});
