# FrontEnd-Master Projesi
Başlanacak olan önyüz geliştirme projeleri için zemin oluşturabilecek bir yapıdır.

Önyüz geliştirmeye başlangıcı hızlandırmayı, modüler ve kolaylık sağlayan bir altyapıyı standartlaştırmayı hedefler.

Zamanla güncellenir, geliştirilir, versiyonları oluşabilir.

## Neler Var?
* HTML, CSS ve JS kısımlarını, modüler ve parçalı şekilde geliştirmenize imkan tanır,
* gulp ile görevlerde otomasyon sağlar (ilgili dosyaların derlenmesi, uygun yere uygun şekilde kaydedilmesi, değişiklikleirn takip edilip gerektiğinde dosyaların tekrar oluşturulması gibi),
* Harici paketler için npm ve bower kullanabilir,
* jQuery ve Bootstrap içinde gelir,
* Bootstrap stil kısmı, sass (scss) dosyaları ile özelleştirilebilir,
* HTML dosyalarında da include (harici parçayı ilgili dosyanın içine çekmek) imkanı tanıyarak modüler geliştirmeyi mümkün kılar (tek bir header, footer oluşturup lazım olan her yerde çağırmak, gerekince tek yerden değiştirmek gibi)
* Ortak çalışma için zemin hazırlar,
* Geliştirme dosyalarının anlaşılır kalmasını sağlar,
* Hayatı kolaylaştırır, mutlu eder :)

## Kullanım
Projenin güncel sürümünü taşıyan bu depoyu kendiniz için kopyalayabilirsiniz (forklayabilirsiniz). Geliştirmeye uygun bir zemin ile birlikte projenizin temelini atmış olursunuz.

## Gereklilikler
Her şeyden önce bilgisayarınızda nodejs ve haliyle npm kurulu olmalıdır. Terminalden global olarak erişebileceğiniz şekilde bower kurulumu da gerekmektedir.

Dosyaları ilk kopyalamanızın ardından, terminalden ilgili dizinin içine gelip sırasıyla ```npm install``` ve tamamlandıktan sonra ```bower install``` komutlarını çalıştırmalısınız.

Bunların tamamlanmasının ardından aynı dizin içerisindeyken ```gulp``` komutunu çalıştırarak geliştirme dizini içindeki dosyaların, gulp tarafından işlenip, yayına atılacak tüm dosyaların bulunacağı ```/public``` dizini içerisine kaydedilir. ```/public/assets``` dizini içine css ve js dosyaları, direkt ```/public``` dizinine de html dosyaları gelecek şekilde kopyalanacaktır. Bu komutla birlikte, terminali kapatmadığınız sürece, ```/dev``` geliştirme dizinindeki değişiklikleir takip eder hale gelirsiniz. Herhangi bir değişiklik uyguladığınızda gulp, gereken görevleri çalıştırır ve ilgili dosyaları günceller.

## Ne nerede?
Geliştirme yaparken kullanacağımız temel yapı ```/dev``` dizini içerisinde. Daha detaylı bir açıklama yapılabilir ancak içindeki klasörler ve örnek dosyalar açıklayıcı olacaktır.

### CSS ve JS Dosyaları
```/dev/js```içerisinde javascript, ```/dev/scss``` içerisinde css dosyaları için geliştirme yapısını inceleyebilirsiniz. Bu alandaki hangi dosyanın, hangi gulp göreviyle nasıl işlenip nereye kaydedildiğini ```gulpfile.js```dosyasını inceleyerek anlayabilirsiniz. Ancak yapının kendi halinde zaten ilgili dosyaların yolları, html içine çekilerek kullanıma hazır hale getirilmektedir.

### HTML Dosyaları
```/dev/layouts```dizini içerisinde, HTML sayfalarda tekrar kullanmamız gerekebilecek parçaları oluştururken (header, footer, menu, sidebar vs), ```/dev/pages``` dizininde ise, gulp görevleri ile işlenip ```/public``` dizinine asıl ürün olarak kaydedilecek HTML sayfalarını oluştururuz. İlgili dizinler de üzerinden ilerleyebileceğiniz örnek barındırmaktadır.

### /dev/vendor nedir?
```/dev/vendor```dizini içerisinde bower tarafından dahil edilen paketlerin tutulması sağlanır. bower bir paket yöneticisidir ve projenize dışarıdan front-end paketleri dahil edebilmenizi sağlar. .gitignore kaydı ile git tarafından görmezden gelindiği unutulmamalıdır.

### Dışarıdan nasıl paket dahil edebilirim?
**bower** paketleri ```/dev/vendor``` dizini altında, **npm** paketleri ise ```/node_modules``` dizini altında bulunacaktır. Bu paket yöneticileri ile sistemine dahil etmek istediğiniz paketlerin isim ve sürüm bilgilerini bower için ```bower.json``` ya da npm için ```package.json``` dosyasında belirtmelisiniz. Bu işlemler için terminal üzerinden komut da girebilirsiniz. Eklediğiniz paketlerin iligli paket yöneticisinin .json dosyasına da eklendiğini ya da .json dosyalarını elle güncelledikten sonra ilgili paket yöneticisinin güncelleme (update) komutunu çalıştırmayı unutmayın.

[bower](https://bower.io) ve [npm](https://www.npmjs.com) hakkında detaylı bilgi için resmi web sitelerini ziyaret edin.

https://bower.io
https://www.npmjs.com

### Ekleyeceğim paket ya da dosyalar bower ya da npm'de bulunmuyorsa?
bower ve npm paketleri ile proje dizinimize kopyalanan dosyaların git depomuza gönderilmediğini unutmayın. Bu yüzden dışarıdan elle ekleyeceğimiz paket ya da dosyaları bu klasörlerin içine değil, gerekirse doğrudan ```/public/assets/``` içindeki ilgili alana kopyalanmasını sağlayın.

---

## Yayına nasıl çıkılır?
Geliştirme dosyaları, paketler, bağımlılıklar vs hepsinin toplanıp yayın için hazırlanıp kaydedildiği yer ```/public``` dizinidir. Bu dizin içindeki dosyaları web projenizin bulunacağı sunucunuza kopyalamanız durumunda yayına hazır hale gelmiş olursunuz. Geri kalan her şey sadece geliştiricilerin görmesi gereken, geliştirme alanıdır.

---

## Bu iş için en iyisi mi?
Bu haliyle bile bakıldığında iyileştirilebileceği birçok nokta olduğu aşikar. Ancak projeye hızlıca girişmek ve bu dünyaya alışmak için çok iyi bir başlangıç diyebiliriz.

Gerektiğinde iyileştirmelerle güncellemeleri sürüyor, farklı sürüm numaraları ile depo üzerinde güncel tutacağız.

Lütfen katkıda bulunmaktan çekinmeyin ve bu iş için ortak dil olabilecek bir standartı birlikte oluşturalım.

### Katkıda Bulunun
Önyüz geliştirme sürecini hızlıca başlamak ve kolaylaştırmak için geliştirilen bu zemine katkıda bulunmak istiyorsanız öncelikle bu depoyu forklayın, öngördüğünüz değişiklikleri uygulayıp uygun açıklamalar ile birlikte pull request oluşturun.

---

## Güncelleme Geçmişi
### v1.2
* Yayına gidecek her şey tek dizin altında toplanır,
* Geliştirme sonucu oluşan ve yayına gönderilecek her şey ```/public```dizini içerisine kaydedilir. Bunu biz değil, görevleri otomatikleştiren gulp sağlar.
* Artık yayına çıkacağımız zaman direkt ```/public```dizini içeriğini sunucumuza göndermemiz yeterlidir.

### v1.1
* Yeni gulp eklentileri ile gulp görevleri güncellendi
* HTML dosyalarının tek satıra sıkıştırılması için _gulp-htmlmin_ dahil edildi
* ```/dev/js``` dizini içerisindeki *tüm .js dosyalarının*, sıkıştırılıp kendiadi.min.js şeklinde ```/assets/js``` dizini içerisine kopyalanmasını sağlayacak _gulp-minify_ eklentisi eklendi ve gulpfile.js içindeki javascript dosyaları ile ilgili görevler bu hesaba katılarak güncellendi.