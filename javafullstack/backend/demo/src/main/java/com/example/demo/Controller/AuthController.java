package com.example.demo.Controller;

import com.example.demo.DTO.AuthRequest;
import com.example.demo.entity.User;
import com.example.demo.services.UserService;
import com.example.demo.Utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        userService.register(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody AuthRequest authRequest) {
        User user = userService.authenticate(authRequest.getUsername(), authRequest.getPassword());
        String token = jwtUtil.generateToken(user.getUsername(), user.getRole());;
        return ResponseEntity.ok(Map.of("token", token));
    }
}
