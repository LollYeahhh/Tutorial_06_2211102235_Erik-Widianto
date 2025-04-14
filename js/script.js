$(document).ready(function () {
    // Toggle Tema
    $('#theme-icon').click(function () {
        $('body').toggleClass('dark-mode');
        $('#theme-switcher').toggleClass('dark-mode');
        const isDark = $('body').hasClass('dark-mode');
        $('#theme-icon').attr('src', isDark ? './asset/gelap.png' : './asset/terang.png');
    });

    // Tampilkan Form Analytic
    $("#analyticBtn").click(function () {
        $(".grid-container").hide();
        $("#mediaContent").hide();
        $("#analyticForm").show();
        $("#margin-control").hide();
        $("#result").text("");
    });

    // Kembali dari Analytic
    $("#backBtn").click(function () {
        $("#analyticForm").hide();
        $(".grid-container").show();
    });

    // Kalkulasi bilangan ganjil
    $("#calculateOddSum").click(function () {
        const min = parseInt($("#minVal").val());
        const max = parseInt($("#maxVal").val());
        if (isNaN(min) || isNaN(max)) {
            $("#result").text("Mohon isi nilai minimum dan maksimum dengan benar.");
            return;
        }
        let sum = 0;
        for (let i = min; i <= max; i++) {
            if (i % 2 !== 0) sum += i;
        }
        $("#result").text(`Jumlah bilangan ganjil dari ${min} sampai ${max} adalah: ${sum}`);
    });

    // Reset Form
    $("#resetForm").click(function () {
        $("#minVal").val('');
        $("#maxVal").val('');
        $("#result").text('');
    });

    // Tampilkan Media
    $("#mediaBtn").click(function () {
        $(".grid-container").hide();
        $("#analyticForm").hide();
        $("#mediaContent").show();
        $("#margin-control").show();
    });

    // Kembali dari Media
    $("#backMediaBtn").click(function () {
        $("#mediaContent").hide();
        $(".grid-container").show();
        $("#margin-control").hide();
    });

    let marginLevel = 1;
    const maxMarginLevel = 4;
    const alignments = ["left", "center", "justify", "right"];

    $("#margin-control").click(function () {
        marginLevel = (marginLevel % maxMarginLevel) + 1;
        const marginValue = marginLevel * 10;
        const alignValue = alignments[marginLevel - 1];

        $("#mediaText").css({
            "margin": `${marginValue}px auto`,
            "text-align": alignValue
        });

        $("#margin-icon").attr("src", `./asset/margin${marginLevel}.png`);
    });

});
