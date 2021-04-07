
<?php
if (isset($_POST['Email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "svrdas@svalbardas.lt";
    $email_subject = "Svalbardas.lt";

    function problem($error)
    {
        echo "Apgailaestaujame, tačiau Jūsų formoje yra klaidų. ";
        echo "Klaidos - žemiau.<br><br>";
        echo $error . "<br><br>";
        echo "Prašome ištaisyti klaidas.<br><br>";
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST['Name']) ||
        !isset($_POST['Email']) ||
        !isset($_POST['Message'])
    ) {
        problem('Apgailestaujame, bet atrodo, kad su Jūsų užpildyta forma yra bėdų.');
    }

    $name = $_POST['Name']; // required
    $email = $_POST['Email']; // required
    $message = $_POST['Message']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'Jūsų elektroninis paštas nevalidus.<br>';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $name)) {
        $error_message .= 'Jūsų įvestas vardas nėra validus.<br>';
    }

    if (strlen($message) < 2) {
        $error_message .= 'Jūsų žinutė nėra validi.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Pranešimas žemiau.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Vardas: " . clean_string($name) . "\n";
    $email_message .= "El. paštas: " . clean_string($email) . "\n";
    $email_message .= "Žinutė: " . clean_string($message) . "\n";

    // create email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>

    <!-- include your success message below -->

    Ačiū, kad susisiekėte. Netrukus Jums atrašysime.

<?php
}
?>
