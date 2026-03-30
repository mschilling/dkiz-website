---
publishDate: '2013-12-09T12:00'
title: 'E-mail synchroniseren met je telefoon, tablet en computer'
tagline: 'Jouw eigen Inbox op je telefoon én tablet'
description: Tegenwoordig wil je altijd en overal gemakkelijk bij je email kunnen, vanaf telefoon en je tablet. Door je email slim te synchroniseren met je smartphone (iPhone, Android) of tablet, kan je er altijd bij!
author: 'michael'
alt: 'Astro'
categories: ['artikelen', 'featured']
order: 2
thumb: /assets/2013/12/mail-sync.jpg
permalink: /artikelen/2013/12/email-synchroniseren-met-gmail-en-imap/
---

Naarmate je meer gebruik maakt van <b>email</b>, kan het handig zijn om altijd en
overal toegang te hebben tot je eigen <b>inbox</b>. Daarbij zou het toch ook niet
meer uit moeten maken of je je email wilt lezen op je telefoon, laptop of computer?
Hoewel dit gemakkelijk is in te stellen, blijft het voor veel mensen een groot raadsel
hoe ze dit voor elkaar kunnen krijgen.<br />
<br />
<b>Synchroniseren</b> is het magische woord. Door het <b>synchroniseren van je email</b> wordt
het mogelijk om vanaf verschillende apparaten (telefoon, tablet) bij dezelfde mailbox
te komen om je email te lezen. In dit artikel wordt stap voor stap uitgelegd hoe
je jouw <b>mailbox</b> <b>gemakkelijk</b> kan <b>synchroniseren</b> met je telefoon, computer en
tablet.<br />
<br />
In dit artikel wordt uitgegaan van een emailadres van <b>Gmail</b> (Google). Een emailadres
van Google is gratis en bovendien biedt deze perfecte ondersteuning voor al je apparaten.

Wil je ook een <b>emailaccount van Gmail aanmaken</b> en heb je hier hulp bij nodig? Lees
dan het artikel '<a 
href="/articles/2007/03/emailadres-aanmaken/" target="_blank">Een gratis email account aanmaken bij Gmail</a>'.<br />
<br />

<h2>
Waarom je mail synchroniseren?</h2>

Je wilt je <b>mailbox synchroniseren</b> omdat hiermee de email op je mobiel, tablet, in
Outlook en op je overige apparaten overal gelijk is. Verwijder je een email in Outlook,
dan zal deze email ook niet meer op je telefoon of tablet verschijnen omdat al je
mail gesynchroniseerd wordt. Tevens wordt nieuw gelezen mail op je telefoon, automatisch
gemarkeerd als ‘gelezen’ in je Outlook Inbox. Dit scheelt je een hoop tijd omdat
je niks meer dubbel hoeft te beheren. Tenslotte heb je wel wat beters te doen, dan
je emails voor een tweede keer als gelezen te markeren.<br />
<br />

<img src="/assets/2013/12/email_sync_300.jpg" style="float:right; border: solid 1px #333333; margin: 4px 0 0 8px" alt="Email synchroniseren met je telefoon, tablet en pc"/>
Veel mensen hebben al een tweede computer of laptop waarop ze dezelfde email kunnen
lezen. Bijvoorbeeld een mailbox van je werk die je ook vanaf huis kan openen. Bij
het toevoegen van zo’n mailbox is er niet altijd voor de juiste instellingen gekozen.
Vaak wordt er gekozen voor een email account van het type <i>POP</i> (dit staat voor 
<i>Post
Office Protocol</i>). Bij <i>POP</i> accounts is het helaas niet mogelijk om je email te synchroniseren,
in tegenstelling tot een mailbox van het type <i>IMAP</i> (<i>Internet Message Access Protocol</i>).
<br />
<br />
<h2>
Wat is het verschil tussen POP en IMAP?</h2>
<i>IMAP</i> en <i>POP</i> zijn twee verschillende protocollen (‘talen’) voor het ophalen van email
bij de desbetreffende mailserver, dit is de plek waar je nieuwe email binnenkomt.
Het belangrijkste verschil tussen <i>POP</i> en <i>IMAP</i>, is dat <i>IMAP</i> altijd synchroniseert
met de mailserver waardoor alle wijzigingen vanuit je client (telefoon, tablet,
Outlook) direct zichtbaar zal zijn bij je andere apparaten. Dit is niet mogelijk
bij (traditionele) <i>POP</i> email, omdat je bij <i>POP</i> email altijd de email ophaalt bij
de server en opslaat op je computer. Als je dus een email via <i>POP</i> mail hebt opgehaald
met je mobiel, dan is deze email op de server niet meer beschikbaar voor andere
clients zoals bijvoorbeeld Outlook.<br />
<br />
<h2>
Ondersteunt mijn huidige email provider wel IMAP?</h2>
Voordat je verder gaat, is het belangrijk om even uit te zoeken of jouw mailserver
ook IMAP ondersteunt. Heb je een emailadres van Hotmail, Gmail, Windows Live mail
of Yahoo, dan is je mailbox in ieder geval geschikt voor IMAP. Heb je een emailadres
bij een andere provider, zoals bijvoorbeeld XS4ALL, Ziggo of KPN, dan moet je even
uitzoeken of de mailserver van je provider IMAP ondersteunt. Deze informatie vind
je meestal (na lang zoeken) op de website van je provider.<br />
<br />
Vaak is deze informatie makkelijker te vinden via Google, mits je weet welke zoektermen
je moet gebruiken. Stel dat je een emailadres hebt bij Ziggo (Ziggo, Quicknet, @home
en Casema), dan kan je met de volgende zoekactie via Google uitproberen:<br />
<br />
Zoeken via Google: 
<a href="https://www.google.com/#q=ziggo+email+imap+ondersteuning" target="_blank" rel="nofollow">ziggo email
imap ondersteuning</a>.<br />
<br />
Uit de zoekresultaten blijkt al snel dat Ziggo géén ondersteuning biedt voor IMAP.
En wanneer je zoekt naar de mogelijkheiden van XS4ALL kan kom je er al vrij snel achter dat hier wèl IMAP
ondersteunt wordt. Probeer op deze manier de mailbox instellingen van jouw 
provider te achterhalen.<br />
<br />
<h2>
Welke mail instellingen heb ik nodig?</h2>
Je hebt nu de <b>(IMAP) instellingen</b> van je mailserver nodig om verder te kunnen gaan.
De instellingen die je nodig hebt om email te kunnen ontvangen zijn: adres van de
IMAP server, het beveiligingstype en een bijbehorend poortnummer. Daarnaast heb 
je de <b>SMTP gegevens</b> van je provider nodig om email te kunnen versturen.<br />
<br />
<span style="text-decoration: underline">IMAP server:
</span>
<br />
Het adres van de mailserver (inkomende mail) is meestal een domeinnaam die begint
met imap, bijvoorbeeld <i>imap.gmail.com</i>. Aan de hand van deze naam weet jouw client
waar jouw email staat opgeslagen.<br />
<br />
<span style="text-decoration: underline">Beveilingstype:</span>
<br />
Wanneer er een beveiligingstype vereist is, dan zorgt dit ervoor dat als jouw email
altijd versleuteld opgehaald zal worden. Veel voorkomende beveiligingstypen zijn
<b>SSL</b>, <b>TLS</b> en <b>STARTTLS</b>.<br />
<br />
<span style="text-decoration: underline">Poort:</span><br />
Het poortnummer is een extra aanvulling op het IMAP serveradres en is nodig voor
de client om te weten bij welke deurtje (poortnummer) aan te kloppen. Veel voorkomende
poortnummers zijn <b>465</b>, <b>587</b> en <b>993</b>.<br />
<br />
<span style="text-decoration: underline">SMTP server:</span>
<br />
Het adres van de uitgaande mailserver (SMTP) is meestal een domeinnaam die begint
met smtp, bijvoorbeeld <i>smtp.gmail.com</i>. Via deze mailserver kan jouw client email
versturen naar andere mensen.<br />
<br />
<h2>Instellingen van de mailserver bij Google GMail</h2>
<div style="float:right"><img alt="Gmail by Google" src="/assets/2013/12/logo_gmail.jpg" style="width: 120px" /></div>Hieronder zie je de IMAP en SMTP instellingen 
van Gmail. Deze gegevens heb je nodig email te kunnen ontvangen en versturen.
<br />
<br />
<b>IMAP instellingen van Gmail:</b> 
<br />
(voor het ontvangen van email)
<ul>
<li>IMAP server: <b>imap.gmail.com</b></li>
<li>IMAP gebruikersnaam: <b>je Gmail adres</b> (bijv. ik@gmail.com)</li>
<li>IMAP wachtwoord: <b>je Gmail wachtwoord</b></li>
<li>IMAP port: <b>993</b></li>
<li>IMAP beveiliging: <b>TLS/SSL</b> (verplicht: <b>ja</b>)</li>
</ul>
<b>SMTP instellingen van Gmail:</b> 
<br />
(voor het versturen van email)
<ul>
<li>SMTP server: <b>smtp.gmail.com</b></li>
<li>SMTP gebruikersnaam: <b>je Gmail adres</b> (bijv. ik@gmail.com)</li>
<li>SMTP wachtwoord: <b>je Gmail wachtwoord</b></li>
<li>SMTP port: <b>465</b></li>
<li>SMTP beveiliging: <b>TLS/SSL</b> (verplicht: <b>ja</b>)</li>
</ul>
Zit je bij een andere provider, zorg er dan voor dat je ook het overzicht compleet
krijgt met de specifieke gegevens van jouw mailprovider.<br />
<br />
In 
het tweede deel van dit artikel wordt uitgelegd hoe je de mailbox instelt op je iPhone, iPad 
of Android telefoon of tablet.<br />
<br />

<h2>Email account van Gmail, Yahoo of Hotmail instellen op je iPhone of iPad</h2>
<div style="float:right"><img alt="iOS by Apple" src="/assets/2013/12/logo_apple.jpg" style="width: 120px; margin-left:20px; margin-top:4px" /></div>Hier wordt stap voor stap beschreven hoe je op je iPhone of iPad een emailaccount kan toevoegen van 
    <b>Gmail</b>, <b>Yahoo</b> of <b>Outlook.com</b> (voormalig Hotmail). Deze accounts zijn van het type IMAP en zijn 
    dus&nbsp; automatisch geschikt voor synchronisatie over verschillende telefoons, tablets en andere apparaten.<br />
<br />
Heb je een andere mailprovider, lees: '<a href="https://computerweetjes.nl/2013/12/07/Een-IMAP-emailaccount-instellen-op-je-iPhone-of-iPad/" target="_blank">Een IMAP emailaccount instellen op je iPhone of iPad</a>'. Hier wordt uitgelegd hoe je een IMAP emailaccount 
    kan toevoegen op je iPhone of iPad.<br />
<br />
<ol>
<li>Ga naar <b>Instellingen </b>(<i>afbeelding 1</i>)</li>
<li>Kies <b>E-mail, contacten, agenda’s</b> (<i>afbeelding 2</i>)</li>
<li>Kies <b>Nieuwe account </b>&nbsp;<ul>
<li>Heb je een Gmail account, kies dan voor <b>Google</b> </li>
<li>Het je een Hotmail adres, of Outlook.com, kies dan voor <b>Outlook.com</b> </li>
<li>Heb je een Yahoo account, kies dan voor <b>YAHOO!</b> </li>
</ul>
</li>
<li>Vul de volgende velden in: <b>Naam</b>, <b>E-mail</b>, <b>Wachtwoord</b> en <b>
Beschrijving </b>(<i>afbeelding 3</i>)</li>
<li>Druk op <b>Volgende</b> om verder te gaan. Jouw gegevens worden direct gecontroleerd.</li>
<li>Schakel de optie <b>Mail</b> in (<i>afbeelding 4</i>) <br />
Het is nu mogelijk om, naast je email, ook bijvoorbeeld jouw Contacten en Agenda te synchroniseren. Het is verstandig om in eerste instantie alleen 
<b>Mail</b> in te schakelen. De andere opties kan je later alsnog gemakkelijk toevoegen.</li>
<li>Druk op <b>Bewaar</b> en je mailaccount wordt nu voor je opgeslagen.</li>
</ol>
<table cellpadding="0" cellspacing="0" border="0">
<tr>
<td>Afbeelding 1: Instellingen<br /><img src="/assets/2013/12/iphone_images/gmail_toevoegen_stap_02.jpg" width="240" style="border:1px solid #c0c0c0; margin-top:10px" /></td>
<td style="padding-left:20px">Afbeelding 2: Nieuw account<br /><img src="/assets/2013/12/iphone_images/gmail_toevoegen_stap_03.jpg" width="240" style="border:1px solid #c0c0c0; margin-top:10px" /></td>
</tr>
<tr>

<td style="padding-top:30px">Afbeelding 3: Accountgegevens<br /><img src="/assets/2013/12/iphone_images/gmail_toevoegen_stap_04.jpg" width="240" style="border:1px solid #c0c0c0; margin-top:10px" /></td>
<td style="padding-top:30px; padding-left:20px">Afbeelding 4: Account opties<br /><img src="/assets/2013/12/iphone_images/gmail_toevoegen_stap_06.jpg" width="240" style="border:1px solid #c0c0c0; margin-top:10px" /></td>
</tr>
</table>
<br />
Open nu de Mail app van je iPhone (of iPAd) en controleer of je email in de mailbox verschijnt.<br />

<br />
<h2>Email account op je Android (Samsung, HTC, Nexus, etc.)</h2>
<div style="float:right"><img alt="Android OS by Google" src="/assets/2013/12/logo_android.jpg" style="width: 120px; margin-left:20px; margin-top:4px" /></div>Hieronder 
    wordt uitgelegd hoe je een <b>IMAP mail account</b> kan toevoegen op je <b>Android</b> toestel 
    naar keuze. Dit kan dus een Samsung Galaxy S zijn, een HTC One, of een ander 
    toestel met het besturingssyteem Android erop.<br />
<ol>
<li>Ga naar <b>Instellingen</b></li>
<li>Kies <b>+ Account toevoegen</b> <i>(afbeelding 1)</i></li>
<li>Kies <b>E-mail </b><i>(afbeelding 2)</i></li>
<li>Geef je emailadres en wachtwoord op en kies <b>Volgende</b></li>
<li>Bij de vraag 'Welk type account is dit' kies je voor <b>IMAP </b><i>
(afbeelding 3)</i></li>
<li>Bij 'Instellingen inkomende e-mail' vul je de volgende gegevens in: <i>
(afb. 4)</i><ul>
<li>Gebruikersnaam: je gebruikersnaam (bijvoorbeeld <b>ik@gmail.com</b>)</li>
<li>Wachtwoord: vul hier je wachtwoord in</li>
<li>IMAP-server: het adres van de imap server (bijvoorbeeld <b>imap.google.com</b>)</li>
<li>Poort: het poortnummer van de server (bijvoorbeeld <b>993</b>)</li>
<li>Beveiligingstype: het beveiligingstype (bijvoorbeeld <b>SSL/TLS</b>)</li>
</ul>
</li>
<li>Bij 'Instellingen uitgaande e-mail' vul je de volgende gegevens in: <i>
(afb. 5)</i><ul>
<li>SMTP-server: het adres van de smtp server (bijvoorbeeld <b>smtp.google.com</b>)</li>
<li>Poort: het portnummer van de server (bijvoorbeeld <b>465</b>)</li>
<li>Beveiligingstype: het beveiligingstype, bijvoorbeeld <b>SSL/TLS</b></li>
<li>Aanmelding vereist: vink deze optie aan wanneer je provider dit 
    onderteunt of vereist</li>
<li>Gebruikersnaam: vul hier je gebruikersnaam in (bijvoorbeeld <b>ik@gmail.com</b>)</li>
<li>Wachtwoord: vul hier je wachtoord in</li>
</ul>
</li>
<li>Bij 'Accountinstellingen' kan je o.a. opgeven hoe vaak jouw mailbox 
gecontroleerd moet worden op nieuwe email. Schakel hier naar eigen wensen 
opties in of uit.</li>
<li>Kies <b>Volgende</b> om verder te gaan</li>
</ol>
Je nieuwe mailaccount is nu toegevoegd en zal automatisch worden gesynchroniseerd.<br />

<table cellpadding="0" cellspacing="0" border="0">
<tr>
<td>Afbeelding 1: Instellingen<br /><img src="/assets/2013/12/android_images/android_stap_01.jpg" width="240" style="border:1px solid #c0c0c0; margin-top:10px" /></td>
<td style="padding-left:20px">Afbeelding 2: Account toevoegen<br /><img src="/assets/2013/12/android_images/android_stap_02.jpg" width="240" style="border:1px solid #c0c0c0; margin-top:10px" /></td>
</tr>
<tr>
<td style="padding-top:30px">Afbeelding 3: Accountinstellingen<br /><img src="/assets/2013/12/android_images/android_stap_05.jpg" width="240" style="border:1px solid #c0c0c0; margin-top:10px" /></td>
<td style="padding-top:30px; padding-left:20px">Afbeelding 4: Inkomende mail<br /><img src="/assets/2013/12/android_images/android_stap_06.jpg" width="240" style="border:1px solid #c0c0c0; margin-top:10px" /></td>
</tr>
<tr>
<td style="padding-top:30px">Afbeelding 3: Uitgaande mail<br /><img src="/assets/2013/12/android_images/android_stap_07.jpg" width="240" style="border:1px solid #c0c0c0; margin-top:10px" /></td>
<td style="padding-top:30px; padding-left:20px">Afbeelding 4: Controlefrequentie<br /><img src="/assets/2013/12/android_images/android_stap_08.jpg" width="240" style="border:1px solid #c0c0c0; margin-top:10px" /></td>
</tr>
</table>

<b>Tip:</b> indien je over een Google Gmail account beschikt, kan je bij stap twee ook gelijk kiezen voor het toevoegen van een Google account (ipv E-Mail).

Heb je nog vragen of opmerkingen? Stuur dan een berichtje naar <a href="mailto:info@datkanikzelf.nl">info@datkanikzelf.nl</a>
