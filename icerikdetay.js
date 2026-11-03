const curriculumData = [
    {
        unit: "1. Tema: Dilimizin Zenginliği",
        topics: [
            {
                name: "Gerçek, Mecaz ve Terim Anlam",
                htmlContent: `
                    <h2>Gerçek, Mecaz ve Terim Anlam</h2>
                    <p>Sözcükler cümle içerisinde kullanıldıkları yere, bağlama ve kazandıkları anlam ilişkilerine göre üç temel başlık altında incelenir. Dilimizin zenginliğini anlamak için bu kavramları çok iyi kavramamız gerekir:</p>
                    
                    <h3>1. Gerçek (Temel) Anlam</h3>
                    <p>Bir sözcüğün aklımıza gelen ilk, temel ve herkesçe bilinen anlamıdır. Sözlük açıldığında ilk sırada yer alan anlam genellikle o kelimenin gerçek anlamını verir.</p>
                    <div class="example-box">
                        <strong>Örnekler:</strong><br>
                        • "Sıcak sudan ellerini çıkarınca <strong>burnu</strong> iyice kızarmıştı." (Vücut organı olarak temel anlam)<br>
                        • "Bahçedeki kuru odunları soba için tek tek <strong>kırdı</strong>." (Fiziksel parçalanma)
                    </div>

                    <h3>2. Mecaz Anlam</h3>
                    <p>Sözcüğün gerçek anlamından tamamen uzaklaşarak kazandığı yeni, soyut ve yanılsamalı anlamlara denir. Genellikle benzetme ve aktarmalar sonucu ortaya çıkar.</p>
                    <div class="example-box">
                        <strong>Örnekler:</strong><br>
                        • "Bana karşı son günlerde çok <strong>soğuk</strong> ve ilgisiz davranıyordu." (Mesafeli, sevgisiz anlamda mecaz)<br>
                        • "Söylediğin o ağır ve kırıcı sözlerle kalbimi derinden <strong>kırdın</strong>." (Üzmek, incitmek anlamında mecaz)
                    </div>

                    <h3>3. Terim Anlam</h3>
                    <p>Bilim, sanat, spor, meslek veya ticaret dalı ile ilgili özel ve belirli kavramları karşılayan sözcüklerdir. Terimler genellikle o alana özgüdür.</p>
                    <div class="example-box">
                        <strong>Örnekler:</strong><br>
                        • "Matematik dersinde <strong>üçgenin</strong> iç açılarının toplamını hesapladık." (Geometri terimi)<br>
                        • "Hakem penaltı çizgisini gösterip düdüğünü çaldı." (Futbol/Spor terimi)
                    </div>
                    <div class="source-tag">Kaynak: MEB Türkiye Yüzyılı Maarif Modeli & Türk Dil Kurumu (TDK)</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[Sözcükte Anlam - Soru ${i+1}] "Ağır" sözcüğü aşağıdaki cümlelerin hangisinde mecaz anlamda kullanılmıştır?`,
                    options: [
                        "A) Pazardan aldığı sebze torbaları çok ağırdı.",
                        "B) Arkadaşının söylediği ağır sözler kalbini oldukça kırdı.",
                        "C) Fabrikadaki ağır demirleri kamyona yüklediler.",
                        "D) Masanın üzerine bırakılan ağır kutu yere düştü."
                    ],
                    correct: 1,
                    exp: "B seçeneğinde 'ağır' kelimesi fiziksel tartı ölçüsü olarak değil, insanı üzen ve yaralayan kırıcı anlamda kullanıldığı için mecazdır."
                }))
            },
            {
                name: "Eş ve Zıt Anlamlı Kelimeler",
                htmlContent: `
                    <h2>Eş ve Zıt Anlamlı Kelimeler</h2>
                    <p>Anlatım gücümüzü artıran, kelimeler arası anlam ilişkilerini inceleyen başlıca iki unsurdur:</p>
                    
                    <h3>1. Eş Anlamlı (Anlamdaş) Sözcükler</h3>
                    <p>Yazılışları ve okunuşları farklı olmasına rağmen anlamları tamamen aynı olan sözcüklerdir. Cümle içinde birbirlerinin yerine genellikle kullanılabilirler.</p>
                    <div class="example-box">
                        <strong>Örnekler:</strong> Mektep - Okul | Cevap - Yanıt | Misafir - Konuk | Sonbahar - Güz
                    </div>

                    <h3>2. Zıt (Karşıt) Anlamlı Sözcükler</h3>
                    <p>Anlamca birbirinin tamamen karşıtı olan durumları, özellikleri veya yönleri bildiren sözcüklerdir.</p>
                    <div class="example-box">
                        <strong>Altın Kural:</strong> Bir sözcüğün olumsuzu onun zıt anlamlısı <u>değildir</u>!<br>
                        • "Gelmek" fiilinin zıttı "gitmek"tir ("gelmemek" ise olumsuzudur).
                    </div>
                    <div class="source-tag">Kaynak: Dil Bilgisi Kuralları</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[Eş ve Zıt Anlam - Soru ${i+1}] Aşağıdaki kelime çiftlerinden hangisi anlam ilişkisi bakımından diğerlerinden farklıdır?`,
                    options: [
                        "A) Siyah - Beyaz",
                        "B) İleri - Geri",
                        "C) Yaşlı - İhtiyar",
                        "D) Büyük - Küçük"
                    ],
                    correct: 2,
                    exp: "C seçeneğindeki 'yaşlı' ve 'ihtiyar' kelimeleri zıt değil, eş anlamlıdır. Diğer seçenekler zıt anlamlıdır."
                }))
            },
            {
                name: "Deyimler ve Atasözleri",
                htmlContent: `
                    <h2>Deyimler ve Atasözleri</h2>
                    <p>Kültürümüzün taşıyıcısı olan kalıplaşmış söz öbekleridir:</p>
                    <h3>1. Deyimler</h3>
                    <p>Bir durumu ya da duyguyu çekici kılmak için kullanılan, genellikle mecaz anlamlı kalıplaşmış sözlerdir (Örn: Etekleri zil çalmak).</p>
                    <h3>2. Atasözleri</h3>
                    <p>Uzun denemelere ve gözlemlere dayanarak özgütlenen, topluma öğüt veren kalıplaşmış kurallı sözlerdir (Örn: Damlaya damlaya göl olur).</p>
                    <div class="source-tag">Kaynak: TDK Kültür Yayınları</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[Deyimler ve Atasözleri - Soru ${i+1}] Aşağıdakilerden hangisi bir "atasözü" niteliği taşır?`,
                    options: [
                        "A) Ağzı kulaklarına varmak",
                        "B) Etekleri zil çalmak",
                        "C) Sakla samanı gelir zamanı",
                        "D) Burnundan solumak"
                    ],
                    correct: 2,
                    exp: "C seçeneği genel bir yargı bildirdiği ve öğüt verdiği için atasözüdür; diğerleri anlık durum bildiren deyimlerdir."
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
                    <p>Cümlelerin kendi içindeki mantıksal bağlantıları şu alt başlıklarla incelenir:</p>
                    <h3>1. Neden-Sonuç Cümleleri</h3>
                    <p>Bir eylemin hangi gerekçeyle yapıldığını gösteren, nedenin de sonucun da gerçekleşmiş olduğu cümlelerdir.</p>
                    <div class="example-box"><strong>Örnek:</strong> "Kar yağdığı için okullar tatil edildi."</div>
                    <h3>2. Amaç-Sonuç Cümleleri</h3>
                    <p>Eylemin hangi hedef doğrultusunda yapıldığını bildirir. Hedef henüz gerçekleşmemiştir.</p>
                    <div class="example-box"><strong>Örnek:</strong> "Sınavı kazanmak amacıyla gece gündüz çalışıyor."</div>
                    <div class="source-tag">Kaynak: MEB Türkçe Kılavuzu</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[Cümlede Anlam - Soru ${i+1}] Aşağıdaki cümlelerin hangisinde "neden-sonuç" ilişkisi vardır?`,
                    options: [
                        "A) Futbol turnuvasını kazanmak için çok antrenman yapıyorlar.",
                        "B) Şiddetli fırtına çıktığı için vapur seferleri iptal edildi.",
                        "C) Yarışmaya katılmak üzere başvuru kağıdını doldurdu.",
                        "D) Sağlığını korumak maksadıyla erken yatıyor."
                    ],
                    correct: 1,
                    exp: "B seçeneğinde seferlerin iptal edilme nedeni şiddetli fırtınadır ve bu neden gerçekleşmiştir (neden-sonuç)."
                }))
            },
            {
                name: "Kök ve Ekler",
                htmlContent: `
                    <h2>Kök ve Ekler</h2>
                    <p>Sözcüklerin yapı taşları olan kökler ve ekler ikiye ayrılır:</p>
                    <h3>1. Kök</h3>
                    <p>Sözcüğün anlamlı en küçük parçasıdır (İsim kökü ve Fiil kökü olarak incelenir).</p>
                    <h3>2. Ekler</h3>
                    <p>Yapım ekleri (yeni kelime türeten) ve çekim ekleri (durum belirleyen) olarak ikiye ayrılır.</p>
                    <div class="source-tag">Kaynak: TDK Dil Bilgisi</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[Kök ve Ekler - Soru ${i+1}] Aşağıdaki sözcüklerden hangisi "yapım eki" almıştır?`,
                    options: [
                        "A) Evler",
                        "B) Kalemim",
                        "C) Simitçi",
                        "D) Kitapta"
                    ],
                    correct: 2,
                    exp: "C seçeneğindeki '-çi' ek simit kelimesine gelerek yeni bir meslek/anlam türetmiştir (yapım ekidir)."
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
                    <p><strong>Öznel Anlatım:</strong> Söyleyenin kişisel görüşlerini barındırır, kanıtlanamaz.<br>
                    <strong>Nesnel Anlatım:</strong> Herkesçe kabul gören, tarafsız ve kanıtlanabilir yargılardır.</p>
                    <div class="source-tag">Kaynak: MEB</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[Öznel-Nesnel - Soru ${i+1}] Aşağıdaki cümlelerden hangisi "nesnel" bir yargı bildirmektedir?`,
                    options: [
                        "A) Dünyanın en güzel tablosu bu duvarda asılıdır.",
                        "B) Yazarın bu son romanı toplam 240 sayfadan oluşmaktadır.",
                        "C) Şarkıcının ses tonu insana muhteşem bir huzur veriyor.",
                        "D) Mavi renk insanı her zaman neşelendiren en harika renktir."
                    ],
                    correct: 1,
                    exp: "B seçeneğindeki sayfa sayısı ölçülebilir, test edilebilir ve kanıtlanabilir bir bilgidir (nesneldir)."
                }))
            },
            {
                name: "Söz Sanatları",
                htmlContent: `
                    <h2>Söz Sanatları</h2>
                    <p>Anlatımı güçlendirmek için başvurulan edebi sanatlardır:</p>
                    <h3>1. Benzetme (Teşbih)</h3>
                    <p>Zayıf unsurun güçlü unsura benzetilmesidir (Örnek: Aslan gibi cesur çocuk).</p>
                    <h3>2. Kişileştirme (Teşhis)</h3>
                    <p>İnsan dışındaki varlıklara insan özellikleri yüklemedir (Örnek: Bulutlar ağlıyordu).</p>
                    <div class="source-tag">Kaynak: Edebi Sanatlar</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[Söz Sanatları - Soru ${i+1}] "Minik serçe, pencereye konup derdini bana anlattı." cümlesinde hangi söz sanatı vardır?`,
                    options: [
                        "A) Yalnızca Benzetme",
                        "B) Kişileştirme ve Konuşturma",
                        "C) Sadece Abartma",
                        "D) Tezat (Zıtlık)"
                    ],
                    correct: 1,
                    exp: "Serçenin dert anlatması hem insani özellik yükleme (kişileştirme) hem de konuşturma sanatını barındırır."
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
                    <p>Varlıklara ad olan sözcüklerdir. Tamlamalar belirtili, belirtisiz ve zincirleme olarak gruplanır.</p>
                    <div class="example-box"><strong>Örnek:</strong> Evin kapısı (Belirtili tamlama)</div>
                    <div class="source-tag">Kaynak: TDK</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[İsim Tamlamaları - Soru ${i+1}] "Okul bahçesinin duvarı" tamlamasının türü aşağıdakilerden hangisidir?`,
                    options: [
                        "A) Belirtili İsim Tamlaması",
                        "B) Belirtisiz İsim Tamlaması",
                        "C) Zincirleme İsim Tamlaması",
                        "D) Takısız İsim Tamlaması"
                    ],
                    correct: 2,
                    exp: "Birden fazla isim tamlamasının birbirine zincirleme bağlanmasıyla oluştuğu için zincirleme isim tamlamasıdır."
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
                    <p>İsimlerin önüne gelerek onları niteleyen veya işaret, sayı, belgisizlık yoluyla belirten sözcüklerdir.</p>
                    <div class="example-box"><strong>Örnek:</strong> Kırmızı kazak (Niteleme sıfatı)</div>
                    <div class="source-tag">Kaynak: MEB</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[Sıfatlar - Soru ${i+1}] "Şu <u>güzel</u> günleri asla unutmayacağım." cümlesindeki altı çizili sözcüğün türü nedir?`,
                    options: [
                        "A) Niteleme Sıfatı",
                        "B) İşaret Sıfatı",
                        "C) Belgisiz Sıfat",
                        "D) Durum Zarfı"
                    ],
                    correct: 0,
                    exp: "'Güzel' sözcüğü günlerin nasıl olduğunu belirten bir niteleme sıfatıdır."
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
                    <p>Tek başına anlamı olmayan, cümle içinde anlam kuran yardımcı sözcük türleridir.</p>
                    <div class="example-box"><strong>Örnek:</strong> Sabaha <u>kadar</u> çalıştı (Edat)</div>
                    <div class="source-tag">Kaynak: TDK</div>
                `,
                questions: Array.from({length: 15}, (_, i) => ({
                    q: `[Edat-Bağlaç - Soru ${i+1}] "Sınava hazırlandı <u>ancak</u> sınavı kaçırdı." cümlesindeki altı çizili kelimenin türü nedir?`,
                    options: [
                        "A) Edat",
                        "B) Bağlaç",
                        "C) Ünlem",
                        "D) Zarf"
                    ],
                    correct: 1,
                    exp: "'Ancak' sözcüğü burada 'fakat, lakin' anlamında cümleleri bağladığı için bağlaçtır."
                }))
            }
        ]
    }
];
