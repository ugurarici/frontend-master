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

Bunların tamamlanmasının ardından aynı dizin içerisindeyken ```gulp``` komutunu çalıştırarak geliştirme dizini içindeki dosyaların, gulp tarafından işlenip, /assets dizini içine css ve js dosyaları, ana dizine de html dosyaları gelecek şekilde kopyalanmasını sağlayabilirsiniz. Bu komutla birlikte, terminali kapatmadığınız sürece, /dev geliştirme dizinindeki değişiklikleir takip eder hale gelirsiniz. Herhangi bir değişiklik uyguladığınızda gulp, gereken görevleri çalıştırır ve ilgili dosyaları günceller.

## Ne nerede?
Geliştirme yaparken kullanacağımız temel yapı ```/dev``` dizini içerisinde. Daha detaylı bir açıklama yapılabilir ancak içindeki klasörler ve örnek dosyalar açıklayıcı olacaktır.

### CSS ve JS Dosyaları
```/dev/js```içerisinde javascript, ```/dev/scss``` içerisinde css dosyaları için geliştirme yapısını inceleyebilirsiniz. Bu alandaki hangi dosyanın, hangi gulp göreviyle nasıl işlenip nereye kaydedildiğini ```gulpfile.js```dosyasını inceleyerek anlayabilirsiniz. Ancak yapının kendi halinde zaten ilgili dosyaların yolları, html içine çekilerek kullanıma hazır hale getirilmektedir.

### HTML Dosyaları
```/dev/layouts```dizini içerisinde, HTML sayfalarda tekrar kullanmamız gerekebilecek parçaları oluştururken (header, footer, menu, sidebar vs), ```/dev/pages``` dizininde ise, gulp görevleri ile işlenip ana dizine asıl ürün olarak kaydedilecek HTML sayfalarını oluştururuz. İlgili dizinler de üzerinden ilerleyebileceğiniz örnek barındırmaktadır.

### /dev/vendor nedir?
```/dev/vendor```dizini içerisinde bower tarafından dahil edilen paketlerin tutulması sağlanır. .gitignore kaydı ile git tarafından görmezden gelindiği unutulmamalıdır.

---

## Bu iş için en iyisi mi?
Bu haliyle bile bakıldığında iyileştirilebileceği birçok nokta olduğu aşikar. Ancak projeye hızlıca girişmek ve bu dünyaya alışmak için çok iyi bir başlangıç diyebiliriz.

Gerektiğinde iyileştirmelerle güncellemeleri sürüyor, farklı sürüm numaraları ile depo üzerinde güncel tutacağız.

Lütfen katkıda bulunmaktan çekinmeyin ve bu iş için ortak dil olabilecek bir standartı birlikte oluşturalım.

### Katkıda Bulunun
Önyüz geliştirme sürecini hızlıca başlamak ve kolaylaştırmak için geliştirilen bu zemine katkıda bulunmak istiyorsanız öncelikle bu depoyu forklayın, öngördüğünüz değişiklikleri uygulayıp uygun açıklamalar ile birlikte pull request oluşturun.