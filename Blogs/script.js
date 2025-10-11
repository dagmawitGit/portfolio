$(document).ready(function () {
  function hideAllSections() {
    $("#userSection, #postSection, #commentSection").addClass("d-none");
  }
  function hideForms(section) {
    $(`#${section} div[id$="Form"], #${section} div[id$="Table"]`).addClass("d-none");
  }

  // Navigation
  $("#userSectionBtn").click(() => { hideAllSections(); $("#userSection").removeClass("d-none"); hideForms("userSection"); });
  $("#postSectionBtn").click(() => { hideAllSections(); $("#postSection").removeClass("d-none"); hideForms("postSection"); });
  $("#commentSectionBtn").click(() => { hideAllSections(); $("#commentSection").removeClass("d-none"); hideForms("commentSection"); });

  // --- USERS ---
  $("#addUserBtn").click(() => { hideForms("userSection"); $("#addUserForm").removeClass("d-none"); });
  $("#viewUserBtn").click(() => { hideForms("userSection"); $("#viewUserTable").removeClass("d-none"); loadUsers(); });
  $("#updateUserBtn").click(() => { hideForms("userSection"); $("#updateUserForm").removeClass("d-none"); });
  $("#deleteUserBtn").click(() => { hideForms("userSection"); $("#deleteUserForm").removeClass("d-none"); });

  function loadUsers() {
    let table = $("#userTableBody").empty();
    fetch("http://127.0.0.1:3001/viewUsers")
      .then(res => res.json())
      .then(data => {
        data.forEach(u => table.append(`<tr><td>${u.user_id}</td><td>${u.username}</td><td>${u.email}</td></tr>`));
      });
  }

  $("#addUserFormSubmit").submit(function (e) {
    e.preventDefault();
    let username = $("#username").val().trim();
    let email = $("#email").val().trim();
    let password = $("#password").val().trim();
    if (!username || !email || !password) { alert("All fields are required!"); return; }

    fetch("http://127.0.0.1:3001/addUser", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    }).then(res => {
      if (res.ok) { alert("User inserted successfully!"); $("#addUserFormSubmit")[0].reset(); }
      else alert("Failed to insert user.");
    });
  });

  // --- UPDATE USERS WITH VALIDATION ---
  $("#updateUserFormSubmit").submit(function(e){
    e.preventDefault();
    let user_id = parseInt($("#updateUserId").val().trim());
    let username = $("#updateUsername").val().trim();
    let email = $("#updateUserEmail").val().trim();
    let password = $("#updateUserPassword").val().trim();
    if(!user_id || !username || !email || !password){ alert("All fields required!"); return; }

    fetch("http://127.0.0.1:3001/viewUsers")
      .then(res => res.json())
      .then(data => {
        let ids = data.map(u => u.user_id);
        if(!ids.includes(user_id)){
          alert("Invalid User ID! Please enter an existing ID.");
          return;
        }
        fetch("http://127.0.0.1:3001/updateUser", {
          method: "PUT",
          headers: {"content-type":"application/json"},
          body: JSON.stringify({ user_id, username, email, password })
        }).then(res => {
          if(res.ok){ alert("User updated!"); $("#updateUserFormSubmit")[0].reset(); loadUsers(); }
          else alert("Failed to update user.");
        });
      });
  });

  // --- DELETE USERS WITH VALIDATION ---
  $("#deleteUserFormSubmit").submit(function(e){
    e.preventDefault();
    let user_id = parseInt($("#deleteUserId").val().trim());
    if(!user_id){ alert("User ID required!"); return; }

    fetch("http://127.0.0.1:3001/viewUsers")
      .then(res => res.json())
      .then(data => {
          let ids = data.map(u => u.user_id);
          if(!ids.includes(user_id)){
              alert("Invalid User ID! Please enter an existing ID.");
              return;
          }
          fetch("http://127.0.0.1:3001/deleteUser", {
              method: "DELETE",
              headers: {"content-type":"application/json"},
              body: JSON.stringify({ user_id })
          }).then(res => {
              if(res.ok){ alert("User deleted!"); $("#deleteUserFormSubmit")[0].reset(); loadUsers(); }
              else alert("Failed to delete user.");
          });
      });
  });

  // --- POSTS ---
  $("#addPostBtn").click(() => { hideForms("postSection"); $("#addPostForm").removeClass("d-none"); });
  $("#viewPostBtn").click(() => { hideForms("postSection"); $("#viewPostTable").removeClass("d-none"); loadPosts(); });
  $("#updatePostBtn").click(() => { hideForms("postSection"); $("#updatePostForm").removeClass("d-none"); });
  $("#deletePostBtn").click(() => { hideForms("postSection"); $("#deletePostForm").removeClass("d-none"); });

  function loadPosts() {
    let table = $("#postTableBody").empty();
    fetch("http://127.0.0.1:3001/viewPosts")
      .then(res => res.json())
      .then(data => {
        data.forEach(p => table.append(`<tr><td>${p.post_id}</td><td>${p.post_content}</td><td>${p.username}</td><td>${p.created_at}</td></tr>`));
      });
  }

  $("#addPostFormSubmit").submit(function (e) {
    e.preventDefault();
    let post_content = $("#post_content").val().trim();
    let user_id = $("#postUserId").val().trim();
    if (!post_content || !user_id) { alert("All fields are required!"); return; }

    fetch("http://127.0.0.1:3001/addPost", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ post_content, user_id }),
    }).then(res => {
      if (res.ok) { alert("Post inserted successfully!"); $("#addPostFormSubmit")[0].reset(); }
      else alert("Failed to insert post.");
    });
  });

  // --- UPDATE POSTS WITH VALIDATION ---
  $("#updatePostFormSubmit").submit(function(e){
    e.preventDefault();
    let post_id = parseInt($("#updatePostId").val().trim());
    let post_content = $("#updatePostContent").val().trim();
    if(!post_id || !post_content){ alert("All fields required!"); return; }

    fetch("http://127.0.0.1:3001/viewPosts")
      .then(res => res.json())
      .then(data => {
        let ids = data.map(p => p.post_id);
        if(!ids.includes(post_id)){
          alert("Invalid Post ID! Please enter an existing ID.");
          return;
        }
        fetch("http://127.0.0.1:3001/updatePost", {
          method: "PUT",
          headers: {"content-type":"application/json"},
          body: JSON.stringify({ post_id, post_content })
        }).then(res => {
          if(res.ok){ alert("Post updated!"); $("#updatePostFormSubmit")[0].reset(); loadPosts(); }
          else alert("Failed to update post.");
        });
      });
  });

  // --- DELETE POSTS WITH VALIDATION ---
  $("#deletePostFormSubmit").submit(function(e){
    e.preventDefault();
    let post_id = parseInt($("#deletePostId").val().trim());
    if(!post_id){ alert("Post ID required!"); return; }

    fetch("http://127.0.0.1:3001/viewPosts")
      .then(res => res.json())
      .then(data => {
          let ids = data.map(p => p.post_id);
          if(!ids.includes(post_id)){
              alert("Invalid Post ID! Please enter an existing ID.");
              return;
          }
          fetch("http://127.0.0.1:3001/deletePost", {
              method: "DELETE",
              headers: {"content-type":"application/json"},
              body: JSON.stringify({ post_id })
          }).then(res => {
              if(res.ok){ alert("Post deleted!"); $("#deletePostFormSubmit")[0].reset(); loadPosts(); }
              else alert("Failed to delete post.");
          });
      });
  });

  // --- COMMENTS ---
  $("#addCommentBtn").click(() => { hideForms("commentSection"); $("#addCommentForm").removeClass("d-none"); });
  $("#viewCommentBtn").click(() => { hideForms("commentSection"); $("#viewCommentTable").removeClass("d-none"); loadComments(); });
  $("#updateCommentBtn").click(() => { hideForms("commentSection"); $("#updateCommentForm").removeClass("d-none"); });
  $("#deleteCommentBtn").click(() => { hideForms("commentSection"); $("#deleteCommentForm").removeClass("d-none"); });

  function loadComments() {
    let table = $("#commentTableBody").empty();
    fetch("http://127.0.0.1:3001/viewComments")
      .then(res => res.json())
      .then(data => {
        data.forEach(c => table.append(`<tr><td>${c.comment_id}</td><td>${c.comment_content}</td><td>${c.username}</td><td>${c.post_content}</td><td>${c.created_at}</td></tr>`));
      });
  }

  $("#addCommentFormSubmit").submit(function (e) {
    e.preventDefault();
    let comment_content = $("#comment_content").val().trim();
    let user_id = $("#commentUserId").val().trim();
    let post_id = $("#commentPostId").val().trim();
    if (!comment_content || !user_id || !post_id) { alert("All fields are required!"); return; }

    fetch("http://127.0.0.1:3001/addComment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ comment_content, user_id, post_id }),
    }).then(res => {
      if (res.ok) { alert("Comment inserted successfully!"); $("#addCommentFormSubmit")[0].reset(); }
      else alert("Failed to insert comment.");
    });
  });

  // --- UPDATE COMMENTS WITH VALIDATION ---
  $("#updateCommentFormSubmit").submit(function(e){
    e.preventDefault();
    let comment_id = parseInt($("#updateCommentId").val().trim());
    let comment_content = $("#updateCommentContent").val().trim();
    if(!comment_id || !comment_content){ alert("All fields required!"); return; }

    fetch("http://127.0.0.1:3001/viewComments")
      .then(res => res.json())
      .then(data => {
        let ids = data.map(c => c.comment_id);
        if(!ids.includes(comment_id)){
          alert("Invalid Comment ID! Please enter an existing ID.");
          return;
        }
        fetch("http://127.0.0.1:3001/updateComment", {
          method: "PUT",
          headers: {"content-type":"application/json"},
          body: JSON.stringify({ comment_id, comment_content })
        }).then(res => {
          if(res.ok){ alert("Comment updated!"); $("#updateCommentFormSubmit")[0].reset(); loadComments(); }
          else alert("Failed to update comment.");
        });
      });
  });

  // --- DELETE COMMENTS WITH VALIDATION ---
  $("#deleteCommentFormSubmit").submit(function(e){
    e.preventDefault();
    let comment_id = parseInt($("#deleteCommentId").val().trim());
    if(!comment_id){ alert("Comment ID required!"); return; }

    fetch("http://127.0.0.1:3001/viewComments")
      .then(res => res.json())
      .then(data => {
          let ids = data.map(c => c.comment_id);
          if(!ids.includes(comment_id)){
              alert("Invalid Comment ID! Please enter an existing ID.");
              return;
          }
          fetch("http://127.0.0.1:3001/deleteComment", {
              method: "DELETE",
              headers: {"content-type":"application/json"},
              body: JSON.stringify({ comment_id })
          }).then(res => {
              if(res.ok){ alert("Comment deleted!"); $("#deleteCommentFormSubmit")[0].reset(); loadComments(); }
              else alert("Failed to delete comment.");
          });
      });
  });
});
