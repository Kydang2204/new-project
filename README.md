# New-project Todo
## TODO
- [ ] Đề xuất Todo tiếp theo. 
   - [ ] Tìm hiểu về bảo mật bằng token? có an toàn không? đề xuất cách để nó an toàn hơn?  
- [ ] Eslint là gì?, sử dụng như thế nào?, có công cụ nào thay thế?, nó chạy như thế nào?
- [ ] Review code line by line thấy chỗ nào ko hợp lý --> sửa cho nó hợp lý, đặt câu hỏi code này 6 tháng nữa mình đọc có hiểu được không? chỗ này code ghi như thế nào? bản chất của xử lý là thế nào?
## DONE
- [x] **Git workflow là gì?, sử dụng nó như thế nào, có công cụ nào thay thế, nó hoạt động thế nào?**
 - ***Git workflow*** là thực hiện phân nhánh nghiêm ngặt theo mẫu được thiết kế quanh nhánh master là xương sống của dự án. Nó cung cấp mô hình giúp để quản lý những dự án lớn.
	- Ví dụ về một mô hình git workflow phổ biến của Vincent Driessen:
	- Nhánh develop tạo từ Nhánh master.
	- Nhánh release tạo từ nhánh develop.
	- Nhánh feature tạo từ nhánh develop.
	- Khi feature hoàn thành thì merge vào develop.
	- Khi realease hoàn thành thì merge vào develop và master.
	- Nếu có vấn đề xảy ra ở nhánh master sẽ tạo ra nhánh hotfix từ nhánh master.
	- Khi nhánh hotfix hoàn thành thì merge vào cả nhanh master và nhánh develop.
	- Trong mô hình này nhánh develop sẽ trở thành nhóm backup cho nhánh master, nhánh realease sẽ tập hợp những những feature khi đã hoàn thành để merge vào nhánh master tạo version mới merge vô develop để backup sử dụng cho sửa chữa phát triển sau này.
 ***Sử dụng:***
	- Đối với dự án hiện tại chỉ làm một người thì có thể chỉ tạo ra nhánh develop để backup nhánh master. Khi nào cần update sẽ tạo ra nhánh develop từ master để chỉnh sửa trên nhánh develop đó khi hoàn thành sẽ push lên git nhánh đó lên cùng với chuyển qua nhánh master để dùng terminal để merge với nhánh develop vừa update và push lên git nhánh master.
	- Đối với dự án lớn hơn 2 người trở lên người developer tạo ra nhánh develop từ nhánh từ master chỉnh sửa trên trên master và sau khi hoàn thành thì gửi push lên git. git sẽ tự tạo yêu cầu merge vào master. PM sẽ kiểm tra và tiến hành merge. sau khi merge trên git. nếu master ở trên local chưa được update merge thì cần thực hiện git pull để update merge và tiếp tục phân nhánh chỉnh sửa trên nhánh develop. 
- [x] **moongose-bcrypt là gì, sử dụng như thế nào, có công cụ nào thay thế, nó chạy như thế nào?**
	- Mongoose-bcrypt là dùng để đảm bảo tính mật của password. Khi hacker tấn công được vào cơ sơ dữ liệu cũng không thể có được tài khoản để đăng nhập vào hệ thống của khách hàng.
	- Khi khách hàng đăng kí tài khoản. mongoose-bcrypt sẽ tạo ra một dãy kí tự từ password khách hàng và không thể đảo ngược lại thành password khách hàng, Nó sử dụng 2 biến là salt là một nhóm kí tự được thêm vào ngẫu nhiên trong password trước khi được hash, round ra số vòng hash. password sau khi hash sẽ được lưu trong cơ sơ dữ liệu.
	- Như một khối rubik khi xoay đúng thứ tự nó sẽ ra cùng một kiểu. Hash tương tự như vậy mà phức tạp hơn. nó thêm, bớt, chia nhỏ, đảo lộn , nhân lên... và việc đảo ngược lại kết quả ban đầu như rubik là không thể.
	- Khi khách hàng đăng nhập mongoose-bcrypt sẽ hash password khách nhập vào dựa vào tài khoản khách nhập để lấy mật khẩu đã đc lưu trong cơ sở dữ liệu ra. dựa vào mật khẩu lưu để lấy thông số round và salt rồi dùng round và salt để hash password khách nhập vào đem ra so sánh với mật khẩu tìm đc trong cơ sở dữ liệu.
	- Có một số công cụ khác có thể thay thế cho mongoose bcypt có nguyên tắc hoạt động tương tự bao gồm bcrypt, md5, password-hash Nhưng mongoose-bcrypt là công cụ giúp tiết kiệm thời gian và code gọn gàng nhất.
- [x] **dotenv là gì ?sử dụng như thế nào, có công cụ nào thay thế, nó chạy như thế nào?**
	- Trong quá trình phát triển. Dự án sẽ trải qua các môi trường khác nhau. mỗi môi trường sẽ cần một số biến môi trường khác nhau. dotenv sẽ giúp nhanh chóng chuyển các biến đó.
	- Có thể rút ngắn tiền tố process.env trong dotenv config để làm gọn code bằng cách tạo một file gán biến cho process.env. và gọi file đó trong file có sử dụng biến môi trường.
	- Để chuyển giữa các môi trường được dễ dàng chúng ta cần một số công cụ đi kèm với dotenv như sau:
	- ***dotenv-safe***: Quá trình post lên git sẽ có nhưng thông tin nhạy cảm không được puclic. docenv-safe sẽ đọc file .env.example để đảm bảo không bị thiếu biến môi trường nào khi chạy chương trình.
	- ***dotenvenc*** : dotenv có thể dùng chung với dotenvenc để tạo ra 1 password có khả năng tạo ra file .env sau khi clone code từ git.  
	- ***env-cmd*** :  Thay vì liêt kê từng biến môi trường trên terminal để chạy code  chúng ta có thể dùng env-cmd để đọc file .env đó và chạy code theo file .env mà env-cmd được yêu cầu đọc. Có thể thiết lập gộp các biến môi trường của các môi trường khác nhau vào 1 file .env và env-cmd có thể đọc biến  theo từng môi trường mà nó được yêu cầu. 
	- ***cross-env*** : Giúp file các thiết lập biến môi trường chạy được trên Windows.
	- ***dotenv-webpack*** Dùng để tạo ra những config cho việc chạy trên nhưng môi trường khác nhau.
- [x] **NODE_ENV là gì?**
	- NODE_ENV là biến môi trường. Khi ứng dụng chạy nó sẽ kiểm tra biến môi trường và thực hiện những hành động khác nhau dựa vào giá trị của biến.
	- Mỗi môi trường khác nhau chúng ta sẽ có một số hành động khác nhau nên chúng ta cần phải sử dụng nó.
	- Trong file .env chúng ta thêm vào biến môi trường NODE_ENV = với môi trường mà chúng ta muốn chạy. Ở các hành động mà chúng ta muốn ứng dụng chạy khác nhau trong nhưng môi trường khác nhau chúng ta sẽ thiết lập hàm nếu là môi trường này thì làm này không phải thì làm cái khác.
- [x] **Middleware dùng để làm gì?**
	- Middleware ở giữa api và web. Middleware dùng để chỉnh sửa, kiểm tra resquest từ web và response từ server.
- [x] Đồng nhất arrow funtion.
- [x] Remove file package-lock.json.
- [x] Chuyển data → MONGODB_NAME, chuyển cluster0.xbdzw.mongodb.net -> MONGODB_HOST trong file .env và .env.example.
- [x] Sửa một số lỗi review từ PM. 
   - [x] Về dòng 9 trong file index.js (verifyToken vs verify_user) đã sửa verify_user thành verify_token.
   - [x] Về dòng 10 trong file index.js (router2 ??? in index.js) đã sửa thành publicRouters.
   - [x] Về return null trong các file login_register.js và verify_token đã xóa return null và sửa file eslintrc.js thêm 'consistent-return': 'off' để không bị báo lỗi.
   - [x] Xóa async trong dong 42 của file login_register vì không cần async ở đây.
   - [x] Remove file pakage-lock.json vì không cần thiết.
   - [x] Sửa 'userModel' -> User ở dòng 19 file models/user.js.
   - [x] Remove middleware checkEmail, checkPassword in file login_register.js chuyển vào handler của post('/login').
   - [x] Tạo more 1 middleware để kiểm tra tồn tại email hoặc name đó hay chưa chưa exist_email_name sử dụng nó trong /api/user.js vào phương thức create user và update user.
   - [x] Update middleware express_mung thêm vào ret_code và ext_code.
   - [x] Reply question:     
 	- CheckEmail và existEmailOrName là middleware có cần thiết ko? 
  	- existEmailOrName thì cần thiết được dùng lại cho phương thức create và update trong file api/user.js, checkEmail thì không vì không được sử dụng lại.
  	- Middleware dùng để làm gì?
  	- Dùng để tái sử dụng, tiết kiệm thời gian, tăng tính đồng nhất, giúp dễ hiểu, dễ bảo trì.
- [x] Tìm hiểu về cách sử dụng Eslint và áp dụng vào dự án.
- [x] Tìm hiểu về cách sử dụng dotenv-safe và áp dụng vào dự án.
- [x] Tạo một schema với User với name, email, pasword. Tạo các method post, get all, get 1 item, put, delete.
- [x] Tìm hiểu về semi và comma-dangle trong eslint và áp dụng vào dự án.
- [x] Thêm thư viện express-mung để chỉnh sửa đầu ra output.
- [x] Tìm hiểu về cách sử dung NODE_ENV và áp dụng vào dự án.
- [x] Tìm hiểu về bcrypt, so sánh với nó với encode và decode.
- [x] Sửa function từ nodeEnv() thành isDevelopment() trong file eslintrc.js.
- [x] Tìm hiểu về cách sử dụng moongose-bcrypt và áp dụng vào dự án.
- [x] Chỉnh sửa return res.json(1001) thành return res.json({ code: 1001 }).
- [x] Tìm hiểu về git workflow và áp dụng vào dự án.

