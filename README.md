## Thực hành sử dụng useState và useEffect 

# Các quy tắc:
- Từ mock tự phân chia các phần thành các component có cấp bậc
- Code giao diện tĩnh (ko state) theo thứ tự từ cấp nhỏ đến cấp lớn
- Dựa vào chức năng mà xem xét xem cần những state nào và component nào có quyền giữ các state đó

# Yêu cầu và cấu trúc thư mục: 
- Yêu cầu :
+ Sử dụng scss
+ Sử dụng proptypes
+ Sử dụng axios để req đến jsonplaceholder (fake api online)
- Cấu trúc thư mục:
+ /components : chứa các components tạo thêm
+ /post-item : là dir chứa component PostItem, vì nó có dùng css nên tạo cho nó 1 dir để dễ quản lí.
* Lưu ý là tên dir chứa compoent ko đăt tên in hoa chữ cái đầu, tránh để reactjs hiểu lầm
+ 2 file còn lại trong /components là 2 component bth

# Note:
-   PostsController là component chứa input và nút dùng để tìm kiếm post. Nên tách ra bởi vì không muốn làm component cha quá dài, hơn nữa sau này lỡ cần thêm nút thì sẽ cần css sẽ rất khó quản lí. Bên cạnh đó là để có thể re-use nếu cần.
-   ...

# Hào Lê - ngaosenpai
