const curriculumData = [
    {
        unit: "1. Tema: Dilimizin Zenginliği",
        topics: [
            {
                name: "Gerçek, Mecaz ve Terim Anlam",
                htmlContent: `
                    <h2>Gerçek, Mecaz ve Terim Anlam</h2>
                    <p>Dilimiz, kelimelerin büründüğü anlam katmanlarıyla yaşayan canlı bir okyanustur. Sözcüklerin cümle içindeki kullanım yerleri, bağlamları ve kazandıkları değerler anlatımın yönünü tamamen değiştirir. İletişimi kusursuz kurabilmek ve yazılı metinleri doğru yorumlayabilmek adına kelimelerin taşıdığı anlam boyutlarını çok iyi bilmek zorundayız. Bu doğrultuda kelimeler temel olarak üç ana kategoriye ayrılmaktadır: Gerçek anlam, mecaz anlam ve terim anlam. Şimdi bu üç temel yapıyı hayatın içinden örnekler, kurallar ve istisnai durumlarla birlikte derinlemesine inceleyelim.</p>
                    
                    <h3>1. Gerçek (Temel) Anlam</h3>
                    <p>Bir sözcük duyulduğunda insanın aklına gelen ilk, somut, temel ve herkesçe ortak kabul gören anlamıdır. Sözlüklerin ilk sayfasında yer alan ve terimsel bir arka plan barındırmayan kullanım, o kelimenin gerçek anlamını temsil eder. Gerçek anlamlı sözcükler genellikle beş duyu organımızla (görme, işitme, tatma, dokunma, koklama) algılayabileceğimiz somut nitelikler taşır.</p>
                    <div class="example-box">
                        <strong>Kapsamlı Örnekler ve Açıklamalar:</strong><br>
                        • "Şiddetli soğuk havada dışarıda kalınca çocuğun minik <strong>burnu</strong> iyice kızarmıştı." (Burada 'burun' kelimesi doğrudan canlı vücudundaki temel bir organı karşıladığı için %100 gerçek anlamlıdır.)<br>
                        • "Bahçe duvarının dibinde yığılan kuru odunları baltayla tek tek <strong>kırdı</strong>." ('Kırmak' eylemi burada fiziksel bir nesneyi parçalarına ayırmak, bütünlüğünü bozmak anlamında temel gerçekliğiyle kullanılmıştır.)<br>
                        • "Çeşmeden doldurduğu buz gibi berrak suyu bir dikişte <strong>bardağa</strong> boşalttı." ('Bardak' kelimesi su içmeye yarayan somut eşya anlamını korumaktadır.)
                    </div>

                    <h3>2. Mecaz Anlam</h3>
                    <p>Sözcüklerin gerçek veya temel anlamından tamamen koparak, başka bir kavram veya nesneye benzetilmesi ya da aktarılması sonucu kazandığı yeni, genellikle soyut ve yanılsamalı anlamlara mecaz anlam denir. Mecazlı söyleyişler dilin sanat gücünü, duygu derinliğini ve ifade zenginliğini tavan yaptıran en önemli unsurlardır. Günlük konuşma dilinde ve edebiyatta sıklıkla karşımıza çıkar.</p>
                    <div class="example-box">
                        <strong>Kapsamlı Örnekler ve Açıklamalar:</strong><br>
                        • "Bana karşı son günlerde sergilediği tavırlar o kadar <strong>soğuk</strong> ve mesafeliydi ki ne diyeceğimi bilemedim." (Buradaki 'soğuk' kelimesi hava sıcaklığıyla ilgili bir fiziksel durumu değil; samimiyetsizliği, sevgisizliği ve mesafeli duruşu temsil ettiği için tamamen mecazdır.)<br>
                        • "Toplantıda kürsüye çıkıp yaptığı sert eleştirilerle hepimizin kalbini derinden <strong>kırdı</strong>." (Buradaki 'kırmak' eylemi kemik veya tahta parçalamak değil; bir insanı üzmek, gücendirmek ve kalben incitmek anlamını taşıdığı için mecaz anlamlıdır.)<br>
                        • "Matematik sınavından aldığı düşük notu görünce hayalleri bir anda <strong>söndü</strong>."
                    </div>

                    <h3>3. Terim Anlam</h3>
                    <p>Bir bilim, sanat, spor, meslek, ticaret ya da teknik dal ile ilgili özel, belirli ve evrensel kavramları karşılayan sözcüklerdir. Terimler günlük yaşamda başka anlamlarda kullanılabilse de, ait oldukları bilim veya sanat dalında daraltılmış özel bir anlam yüklenirler.</p>
                    <div class="example-box">
                        <strong>Kapsamlı Örnekler ve Açıklamalar:</strong><br>
                        • "Geometri dersinde tahtaya kalkarak <strong>üçgenin</strong> iç açılarının ölçüleri toplamını hesapladı." ('Üçgen' kelimesi matematik ve geometri bilim dalının temel bir terimidir.)<br>
                        • "Hakem, ceza sahası içinde yapılan sert müdahale sonrasında beyaz noktayı gösterip penaltı <strong>düdüğünü</strong> çaldı." ('Penaltı' ve 'hakem' futbol spor dalının terimleridir.)<br>
                        • "Tiyatro oyununun bu akşam sahnelenecek olan ikinci <strong>perdesi</strong> için biletler tükendi." ('Perde' sözcüğü evdeki tül anlamından sıyrılarak tiyatro terimi olmuştur.)
                    </div>
                    <div class="source-tag">Kaynak: MEB Türkiye Yüzyılı Maarif Modeli & Türk Dil Kurumu (TDK) Uzman Kılavuzu</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[Sözcükte Anlam - Soru ${i+1}] "Ağır" sözcüğü aşağıdaki cümlelerin hangisinde mecaz anlamda kullanılmıştır?`,
                    options: [
                        "A) Pazardan aldığı sebze torbaları kolunu koparacak kadar ağırdı.",
                        "B) Arkadaşının toplantı orta yerinde söylediği ağır sözler kalbini derinden yaraladı.",
                        "C) Fabrika deposundaki tonlarca ağırlığındaki demirleri büyük kamyona yüklediler.",
                        "D) Masanın üzerine bırakılan ağır mermer blok dengesini kaybedip yere düştü."
                    ],
                    correct: 1,
                    exp: "B seçeneğinde 'ağır' kelimesi fiziksel kilogram tartısı olarak değil, insanı üzen ve ruhsal olarak sarsan kırıcı eleştiri anlamında kullanıldığı için mecazdır."
                }))
            },
            {
                name: "Eş ve Zıt Anlamlı Kelimeler",
                htmlContent: `
                    <h2>Eş ve Zıt Anlamlı Kelimeler</h2>
                    <p>Dilimizin ifade gücünü, yazınsal kalitesini ve cümle içi kıvraklığını artıran en temel anlam ilişkilerinden biri kelimeler arası kurulan eş ve zıt anlam denklemleridir. Kelimeler arasındaki bu köprüler, aynı duyguyu farklı tonlarda ifade etmemize olanak tanır. Konuyu tüm detayları, püf noktaları ve olası tuzaklarıyla ele alalım:</p>
                    
                    <h3>1. Eş Anlamlı (Anlamdaş) Sözcükler</h3>
                    <p>Yazılışları, okunuşları ve kökenleri tamamen farklı olmasına rağmen bildirdikleri anlamlar bakımından birebir aynı olan sözcüklerdir. Bu sözcükler cümle içerisinde kural olarak birbirlerinin yerine kullanılabilir; ancak bazı durumlarda kalıplaşmış deyimler veya atasözleri istisna oluşturabilir.</p>
                    <div class="example-box">
                        <strong>Kapsamlı Örnek Çiftler:</strong><br>
                        • Mektep (Arapça kökenli) - Okul (Türkçe kökenli)<br>
                        • Cevap - Yanıt | Misafir - Konuk | Sonbahar - Güz | Kırmızı - Al | Fakir - Yoksul
                    </div>

                    <h3>2. Zıt (Karşıt) Anlamlı Sözcükler</h3>
                    <p>Anlamca birbirinin tamamen zıttı olan, bir niteliğin, yönün veya durumun iki uç kutbunu temsil eden sözcüklerdir. Zıt anlamlılık, varlıkların uzamsal veya soyut karşıtlıklarını gözler önüne serer.</p>
                    <div class="example-box">
                        <strong>Kritik Bilgi ve Sınav Tuzağı:</strong><br>
                        Bir sözcüğün olumsuzluk eki (-me / -ma / -mez / -maz) almış hali kesinlikle onun zıt anlamlısı değildir! Zıt anlam başka bir kök kelimedir.<br>
                        • <em>Doğru</em> kelimesinin zıttı <u>Yanlış</u>'tır. ("Doğru" kelimesinin olumsuzu olan "Doğru değil" veya "Doğrulamamak" onun zıttı sayılamaz.)<br>
                        • <em>Gelmek</em> fiilinin zıttı <u>Gitmek</u>'tir ("Gelmemek" ise fiilin olumsuz biçimidir).
                    </div>
                    <div class="source-tag">Kaynak: Dil Bilgisi Kuralları & TDK Sözlük Analizleri</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[Eş ve Zıt Anlam - Soru ${i+1}] Aşağıdaki kelime çiftlerinden hangisi anlam ilişkisi bakımından diğerlerinden farklı bir kategoridedir?`,
                    options: [
                        "A) Siyah - Beyaz",
                        "B) İleri - Geri",
                        "C) Yaşlı - İhtiyar",
                        "D) Büyük - Küçük"
                    ],
                    correct: 2,
                    exp: "C seçeneğindeki 'yaşlı' ve 'ihtiyar' kelimeleri zıt anlamlı değil, aynı anlamı veren eş anlamlı kelimelerdir. Diğer tüm şıklar zıt anlamlı çiftlerden oluşur."
                }))
            },
            {
                name: "Deyimler ve Atasözleri",
                htmlContent: `
                    <h2>Deyimler ve Atasözleri</h2>
                    <p>Yüzyılların süzgecinden süzülerek günümüze ulaşan, ulusal hafızamızın ve kültürümüzün en değerli mirası olan kalıplaşmış söz öbekleridir. Anlatımı vurucu kılmak için hayati önem taşırlar:</p>
                    <h3>1. Deyimler</h3>
                    <p>Bir kavramı, durumu ya da duyguyu daha çekici, kinayeli ve etkileyici kılmak amacıyla kullanılan, genellikle gerçek anlamından uzaklaşıp mecazlaşan kalıplaşmış söz dizileridir. Deyimler ders vermez, anlık durumları resmeder.</p>
                    <h3>2. Atasözleri</h3>
                    <p>Atalarımızın uzun denemelere, gözlemlere ve derin tecrübelere dayanarak oluşturduğu, topluma yön veren, doğru yolu gösteren ve kesin kurallar / öğütler içeren kalıplaşmış özlü sözlerdir.</p>
                    <div class="example-box">
                        <strong>Temel Fark:</strong> Deyimler anlık bir vaziyeti tasvir eder (Örn: Ağzı kulaklarına varmak), atasözleri ise evrensel bir ders ve kural bildirir (Örn: Sakla samanı gelir zamanı).
                    </div>
                    <div class="source-tag">Kaynak: Türk Halk Edebiyatı & TDK Kaynakları</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[Deyimler ve Atasözleri - Soru ${i+1}] Aşağıdaki kalıplaşmış sözlerden hangisi bir "atasözü" niteliği taşımaktadır?`,
                    options: [
                        "A) Ağzı kulaklarına varmak",
                        "B) Etekleri zil çalmak",
                        "C) Sakla samanı gelir zamanı",
                        "D) Burnundan solumak"
                    ],
                    correct: 2,
                    exp: "C seçeneği genel bir hayat kuralı koyduğu ve öğüt verdiği için atasözüdür; diğerleri anlık duygu belirten deyimlerdir."
                }))
            }
        ]
    },
    {
        unit: "2. Tema: Bağımsızlık Yolu",
        topics: [
            {
                name: "Cümlede Anlam İlişkileri",
                htmlContent: `
                    <h2>Cümlede Anlam İlişkileri</h2>
                    <p>Cümleler arasındaki mantıksal köprüler, olaylar ile durumlar arasındaki sebep, hedef ve şart bağlarını kurar. Türkçe testlerinde en çok soru gelen alanlardan biridir. Konuyu tüm hatlarıyla ele alalım:</p>
                    <h3>1. Neden-Sonuç (Sebep-Sonuç) Cümleleri</h3>
                    <p>Bir eylemin hangi gerekçeyle veya hangi sebepten ötürü gerçekleştiğini bildiren cümlelerdir. Bu tarz cümlelerde hem neden (sebep) bölümü hem de sonuç bölümü kesin olarak gerçekleşmiş durumdadır.</p>
                    <div class="example-box">
                        <strong>Sağlama Yöntemi:</strong> Cümlenin neden kısmına "çünkü" bağlacını getirdiğimizde anlam akışında hiçbir bozulma olmaz.<br>
                        • Örnek: "Şiddetli fırtına çıktığı için vapur seferleri iptal edildi." (Neden: Fırtına çıkması, Sonuç: Seferlerin iptali. Her ikisi de gerçekleşmiştir.)
                    </div>
                    <h3>2. Amaç-Sonuç Cümleleri</h3>
                    <p>Bir eylemin hangi hedef, niyet veya maksat doğrultusunda yapıldığını ortaya koyan cümlelerdir. Neden-sonuçtan en büyük farkı, amaç cümlelerinde hedefin <u>henüz gerçekleşmemiş</u> olmasıdır.</p>
                    <div class="example-box">
                        <strong>Sağlama Yöntemi:</strong> Cümledeki yargının yerine "-mek amacıyla / maksadıyla" kalıbı rahatça konulabilir.<br>
                        • Örnek: "Futbol turnuvasını kazanmak için günlerce aralıksız antrenman yaptılar." (Kazanma hedefi henüz o an gerçekleşmemiştir.)
                    </div>
                    <div class="source-tag">Kaynak: MEB Dil Bilgisi Kılavuzu</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[Cümlede Anlam - Soru ${i+1}] Aşağıdaki cümlelerin hangisinde "neden-sonuç" ilişkisi hâkimdir?`,
                    options: [
                        "A) Okulun tiyatro kulübüne girmek için hafta sonu seçmelere katılacak.",
                        "B) Günlerce uykusuz kaldığı için sınav esnasında başı şiddetle ağrıdı.",
                        "C) Yeni çıkacak romanını imzalatmak maksadıyla fuar alanına doğru yürüdü.",
                        "D) Sağlığını korumak amacıyla her sabah düzenli olarak yürüyüş yapıyor."
                    ],
                    correct: 1,
                    exp: "B seçeneğinde baş ağrısının somut gerekçesi uykusuz kalmaktır ve bu durum geçmişte yaşanıp bitmiştir (neden-sonuç)."
                }))
            },
            {
                name: "Kök ve Ekler",
                htmlContent: `
                    <h2>Kök ve Ekler</h2>
                    <p>Sözcüklerin yapısal analizini yapan morfoloji bilimi, kelimelerin en küçük yapı taşları olan kökler ve onlara tutunan ekler üzerine kuruludur. Detayları inceleyelim:</p>
                    <h3>1. Sözcük Kökü</h3>
                    <p>Bir kelimenin anlamı bozulmadan parçalanamayan en küçük anlamlı parçasıdır. Kökler tür bakımından ikiye ayrılır: İsim kökleri (-mek/mak alamaz) ve Fiil kökleri (-mek/mak alabilir).</p>
                    <h3>2. Ekler</h3>
                    <p>Kök veya gövdelere gelerek ya yeni sözcükler türeten (Yapım Ekleri) ya da cümle içindeki görevlerini/durumlarını düzenleyen (Çekim Ekleri) eklerdir.</p>
                    <div class="source-tag">Kaynak: TDK Morfoloji Raporları</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[Kök ve Ekler - Soru ${i+1}] Aşağıdaki sözcüklerden hangisi yapı bakımından "yapım eki" almıştır?`,
                    options: [
                        "A) Evler",
                        "B) Kalemim",
                        "C) Simitçi",
                        "D) Kitapta"
                    ],
                    correct: 2,
                    exp: "C seçeneğindeki '-çi' eki simit ismine gelerek meslek/yeni bir anlam türetmiştir (yapım ekidir)."
                }))
            }
        ]
    },
    {
        unit: "3. Tema: Farklı Dünyalar",
        topics: [
            {
                name: "Öznel ve Nesnel Anlatım",
                htmlContent: `
                    <h2>Öznel ve Nesnel Anlatım</h2>
                    <p>Cümlelerin bilimsel, mantıksal doğruluk değerlerini ve kanıtlanabilirlik vasıflarını belirleyen en önemli iki kriter öznel ve nesnel anlatım biçimleridir:</p>
                    <h3>1. Öznel Anlatım</h3>
                    <p>Söyleyenin kendi kişisel duygularını, beğenilerini, önyargılarını ve hayranlıklarını içeren cümlelerdir. Öznel yargılar kişiden kişiye değişir, görecelidir ve bilimsel olarak kanıtlanamaz.</p>
                    <h3>2. Nesnel Anlatım</h3>
                    <p>Kişisel yorumlardan, duygulardan ve beğenilerden tamamen arındırılmış; herkesçe aynı kabul edilen, veriye dayalı ve tarafsız bir şekilde kanıtlanabilen yargılardır.</p>
                    <div class="example-box">
                        <strong>Örnek Karşılaştırma:</strong><br>
                        • "Yazarın kaleme aldığı bu roman sürükleyici bir dille yazılmış." (Öznel - Sana göre sürükleyici olan bana göre sıkıcı gelebilir.)<br>
                        • "Yazarın kaleme aldığı bu roman toplam 320 sayfadan oluşmaktadır." (Nesnel - Sayfa sayısı ölçülüp kanıtlanabilir.)
                    </div>
                    <div class="source-tag">Kaynak: MEB Türkçe Test Kitapları</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[Öznel-Nesnel - Soru ${i+1}] Aşağıdaki cümlelerden hangisi nesnel bir yargı içermektedir?`,
                    options: [
                        "A) Şairin bu şiir kitabı edebiyatımızın şaheseridir.",
                        "B) Okulumuzun bahçesinde on iki adet çam ağacı bulunmaktadır.",
                        "C) Mavi renk insan ruhuna her zaman en büyük huzuru verir.",
                        "D) Tarihi romanlar diğer kitap türlerine göre çok daha heyecanlıdır."
                    ],
                    correct: 1,
                    exp: "B seçeneğindeki ağaç sayısı gözlemlenip tek tek sayılarak kanıtlanabileceği için nesnel bir ifadedir."
                }))
            },
            {
                name: "Söz Sanatları",
                htmlContent: `
                    <h2>Söz Sanatları</h2>
                    <p>Anlatımı sıradanlıktan kurtarıp estetik bir boyuta taşıyan edebi sanatlar, yazının duygusal atmosferini besler. Başlıcaları şunlardır:</p>
                    <h3>1. Benzetme (Teşbih)</h3>
                    <p>Anlatımı güçlendirmek için aralarında ortak yön bulunan iki varlıktan zayıf olanın güçlü olanına benzetilmesidir.</p>
                    <h3>2. Kişileştirme (Teşhis) ve Konuşturma (İntak)</h3>
                    <p>İnsan dışındaki canlı veya cansız varlıklara insani özellikler (üzülmek, küsmek) yükleme sanatıdır. Konuşturuldukları takdirde intak olur.</p>
                    <div class="source-tag">Kaynak: Edebi Sanatlar Kılavuzu</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[Söz Sanatları - Soru ${i+1}] "Minik serçe, penceremin pervazına konup sabahın soğuğundan dert yandı." cümlesinde hangi sanatlar vardır?`,
                    options: [
                        "A) Yalnızca Benzetme",
                        "B) Kişileştirme ve Konuşturma",
                        "C) Sadece Abartma",
                        "D) Tezat (Zıtlık)"
                    ],
                    correct: 1,
                    exp: "Serçenin dert yanması insani özellik kazandırma (kişileştirme) ve konuşturma sanatının ortak ürünüdür."
                }))
            }
        ]
    },
    {
        unit: "4. Tema: İletişim ve Sosyal İlişkiler",
        topics: [
            {
                name: "İsimler ve İsim Tamlamaları",
                htmlContent: `
                    <h2>İsimler ve İsim Tamlamaları</h2>
                    <p>Varlıkları evrende tanıtmamızı sağlayan sözcüklere isim denir. İsimlerin kendi aralarında oluşturduğu tamlama grupları ise belirtili, belirtisiz ve zincirleme olarak çeşitlenir:</p>
                    <h3>1. Belirtili İsim Tamlaması</h3>
                    <p>Hem tamlayanın ek (-in/-ın) hem de tamlananın ek (-i/-sı) aldığı tamlama türüdür (Örn: Ev<strong>in</strong> kapı<strong>sı</strong>).</p>
                    <h3>2. Belirtisiz İsim Tamlaması</h3>
                    <p>Tamlayanın ek almadığı, sadece tamlananın ek aldığı tamlamadır (Örn: Okul kapı<strong>sı</strong>).</p>
                    <div class="source-tag">Kaynak: TDK</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[İsim Tamlamaları - Soru ${i+1}] "Türkçe dersinin çalışma kitabı" tamlamasının türü nedir?`,
                    options: [
                        "A) Belirtili İsim Tamlaması",
                        "B) Belirtisiz İsim Tamlaması",
                        "C) Zincirleme İsim Tamlaması",
                        "D) Takısız İsim Tamlaması"
                    ],
                    correct: 2,
                    exp: "Birden fazla isim tamlamasının birbirine halka gibi bağlanmasıyla oluştuğu için zincirleme isim tamlamasıdır."
                }))
            }
        ]
    },
    {
        unit: "5. Tema: Bilim ve Teknoloji",
        topics: [
            {
                name: "Sıfatlar (Ön Adlar)",
                htmlContent: `
                    <h2>Sıfatlar (Ön Adlar)</h2>
                    <p>İsimlerin hemen önüne gelerek onları niteleyen ya da işaret, sayı, belgisiz anlamlarla belirten sözcük öbekleridir. Niteleme ve belirtme sıfatları olarak iki ana kola ayrılır.</p>
                    <div class="example-box"><strong>Örnek:</strong> Kırmızı kazak (Niteleme sıfatı) | Bu kalem (İşaret sıfatı)</div>
                    <div class="source-tag">Kaynak: MEB</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[Sıfatlar - Soru ${i+1}] "Şu <u>eski</u> fotoğrafları görünce çocukluğum aklıma geldi." cümlesindeki altı çizili kelimenin türü nedir?`,
                    options: [
                        "A) Niteleme Sıfatı",
                        "B) İşaret Sıfatı",
                        "C) Belgisiz Sıfat",
                        "D) Durum Zarfı"
                    ],
                    correct: 0,
                    exp: "'Eski' sözcüğü fotoğrafların nasıl olduğunu bildiren niteleme sıfatıdır."
                }))
            }
        ]
    },
    {
        unit: "6. Tema: Lider Ruhlar",
        topics: [
            {
                name: "Edat, Bağlaç ve Ünlem",
                htmlContent: `
                    <h2>Edat, Bağlaç ve Ünlem</h2>
                    <p>Tek başına somut bir anlamı bulunmayan, ancak cümle içerisinde kelimeler arası ilgi kurarak görev kazanan yardımcı dilbilgisi unsurlarıdır.</p>
                    <div class="example-box"><strong>Örnek:</strong> Akşama <u>kadar</u> ders çalıştı (Edat) | Sevdi <u>fakat</u> kavuşamadı (Bağlaç)</div>
                    <div class="source-tag">Kaynak: TDK</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[Edat-Bağlaç - Soru ${i+1}] "Çok yoruldu <u>ancak</u> ödevini bitirmeyi başardı." cümlesindeki altı çizili kelimenin türü nedir?`,
                    options: [
                        "A) Edat",
                        "B) Bağlaç",
                        "C) Ünlem",
                        "D) Zarf"
                    ],
                    correct: 1,
                    exp: "'Ancak' sözcüğü burada 'fakat, lakin' anlamında iki cümleyi birbirine bağladığı için bağlaçtır."
                }))
            }
        ]
    }
];
